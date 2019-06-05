import {Component, OnInit} from '@angular/core';
import {SideMenuService} from '../../shared/side-menu.service';
import {VoService} from '../../core/services/vo.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Vo} from '../../core/models/Vo';
import {SideMenuItemService} from '../../shared/side-menu/side-menu-item.service';

@Component({
  selector: 'app-vo-detail-page',
  templateUrl: './vo-detail-page.component.html',
  styleUrls: ['./vo-detail-page.component.scss']
})
export class VoDetailPageComponent implements OnInit {

  constructor(
    private sideMenuService: SideMenuService,
    private voService: VoService,
    private route: ActivatedRoute,
    private router: Router,
    private sideMenuItemService: SideMenuItemService,
  ) {
    this.currentUrl = router.url;

    router.events.subscribe((_: NavigationEnd) => {
      if (_ instanceof NavigationEnd) {
        this.currentUrl = _.url;
      }
    });
  }

  vo: Vo;

  currentUrl;

  notOverviewRegex = new RegExp('/organizations/\\d+/\\w+$');
  settingsSubPageRegex = new RegExp('/organizations/\\d+/settings/\\w+$');

  ngOnInit() {
    this.route.params.subscribe(params => {
      const voId = params['voId'];

      this.voService.getVoById(voId).subscribe(vo => {
        this.vo = vo;

        const sideMenuItem = this.sideMenuItemService.parseVo(vo);

        this.sideMenuService.setMenuItems([sideMenuItem]);
      });
    });
  }

  getBackButtonUrl() {
    if (this.settingsSubPageRegex.test(this.currentUrl)) {
      return ['/organizations/', this.vo.id, 'settings'];
    }
    return this.notOverviewRegex.test(this.currentUrl) ?
      ['/organizations/', this.vo.id] :
      ['/organizations'];
  }
}
