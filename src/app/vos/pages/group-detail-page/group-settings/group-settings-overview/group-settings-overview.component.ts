import {Component, HostBinding, OnInit} from '@angular/core';
import {SideMenuService} from '../../../../../core/services/common/side-menu.service';
import {VoService} from '../../../../../core/services/api/vo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuItem} from '../../../../../shared/models/MenuItem';
import {Vo} from '../../../../../core/models/Vo';
import {Group} from '../../../../../core/models/Group';
import {GroupService} from '../../../../../core/services/api/group.service';

@Component({
  selector: 'app-group-settings-overview',
  templateUrl: './group-settings-overview.component.html',
  styleUrls: ['./group-settings-overview.component.scss']
})
export class GroupSettingsOverviewComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor(
    private sideMenuService: SideMenuService,
    private voService: VoService,
    private groupService: GroupService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {
  }

  items: MenuItem[] = [];
  vo: Vo;
  group: Group;

  ngOnInit() {
    this.route.parent.parent.params.subscribe(grandParentParams => {
      const voId = grandParentParams['voId'];
      const groupId = grandParentParams['groupId'];
      this.groupService.getGroupById(groupId).subscribe(group => {
        this.group = group;

        this.voService.getVoById(voId).subscribe(vo => {
          this.vo = vo;

          this.initItems();
        });
      });
    });
  }

  private initItems() {
    this.items = [
      {
        icon: 'attributes-white.svg',
        url: `/organizations/${this.vo.id}/groups/${this.group.id}/settings/attributes`,
        label: 'MENU_ITEMS.GROUP.ATTRIBUTES',
        style: 'group-btn'
      },
      {
        icon: 'group-white.svg',
        url: `/organizations/${this.vo.id}/groups/${this.group.id}/settings/expiration`,
        label: 'MENU_ITEMS.GROUP.EXPIRATION',
        style: 'group-btn'
      },
    ];
  }
}
