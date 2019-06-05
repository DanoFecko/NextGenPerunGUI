import { Component, OnInit } from '@angular/core';
import {SideMenuService} from '../../../../shared/side-menu.service';
import {VoService} from '../../../../core/services/vo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuItem} from '../../../../shared/MenuItem';
import {Vo} from '../../../../core/models/Vo';

@Component({
  selector: 'app-vo-settings-overview',
  templateUrl: './vo-settings-overview.component.html',
  styleUrls: ['./vo-settings-overview.component.scss']
})
export class VoSettingsOverviewComponent implements OnInit {

  constructor(
    private sideMenuService: SideMenuService,
    private voService: VoService,
    protected route: ActivatedRoute,
    protected router: Router
  ) { }

  items: MenuItem[] = [];
  vo: Vo;

  ngOnInit() {
    this.route.parent.parent.params.subscribe(parentParams => {
      const voId = parentParams['voId'];

      this.voService.getVoById(voId).subscribe(vo => {
        this.vo = vo;

        this.initItems();
      });
    });
  }

  private initItems() {
    this.items = [
      {
        icon: 'attributes-white.svg',
        url: `/organizations/${this.vo.id}/settings/attributes`,
        label: 'MENU_ITEMS.VO.ATTRIBUTES',
        style: 'vo-btn'
      },
      {
        icon: 'group-white.svg',
        url: `/organizations/${this.vo.id}/settings/expiration`,
        label: 'MENU_ITEMS.VO.EXPIRATION',
        style: 'vo-btn'
      }
    ];
  }
}
