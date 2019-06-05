import {Component, OnInit} from '@angular/core';
import {SideMenuService} from '../../shared/side-menu.service';
import {VoService} from '../../core/services/vo.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {SideMenuItemService} from '../../shared/side-menu/side-menu-item.service';
import {Vo} from '../../core/models/Vo';
import {GroupService} from '../../core/services/group.service';
import {Group} from '../../core/models/Group';

@Component({
  selector: 'app-group-detail-page',
  templateUrl: './group-detail-page.component.html',
  styleUrls: ['./group-detail-page.component.scss']
})
export class GroupDetailPageComponent implements OnInit {

  constructor(
    private sideMenuService: SideMenuService,
    private voService: VoService,
    private route: ActivatedRoute,
    private router: Router,
    private sideMenuItemService: SideMenuItemService,
    private groupService: GroupService
  ) {
    this.currentUrl = router.url;

    router.events.subscribe((_: NavigationEnd) => {
      if (_ instanceof NavigationEnd) {
        this.currentUrl = _.url;

        this.isOnOverviewPage = this.overviewUrlRegex.test(this.currentUrl);
      }
    });
  }

  currentUrl;
  overviewUrlRegex = new RegExp('/organizations/\\d+/groups/\\d+$');
  isOnOverviewPage = false;

  vo: Vo;
  group: Group;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const voId = params['voId'];
      const groupId = params['groupId'];

      this.voService.getVoById(voId).subscribe(vo => {
        this.vo = vo;
        this.groupService.getGroupById(groupId).subscribe(group => {
          this.group = group;
          const voSideMenuItem = this.sideMenuItemService.parseVo(vo);
          const groupSideMenuItem = this.sideMenuItemService.parseGroup(group);

          this.sideMenuService.setMenuItems([voSideMenuItem, groupSideMenuItem]);
        });
      });
    });
  }

  getBackButtonUrl() {
    return this.isOnOverviewPage ?
      ['/organizations', this.vo.id, 'groups'] :
      ['/organizations', this.vo.id, 'groups', this.group.id];
  }
}
