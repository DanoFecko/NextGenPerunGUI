import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../shared/MenuItem';
import {SideMenuService} from '../shared/side-menu.service';

@Component({
  selector: 'app-main-menu-page',
  templateUrl: './main-menu-page.component.html',
  styleUrls: ['./main-menu-page.component.scss']
})
export class MainMenuPageComponent implements OnInit {

  constructor(
    private sideMenuService: SideMenuService
  ) { }

  items: MenuItem[] = [
    {
      icon: 'vo-white.svg',
      url: '/organizations',
      label: 'MAIN_MENU.VOS',
      style: 'vo-btn',
      clickAction: function (any) {
        return;
      }
    },
    {
      icon: 'facility-white.svg',
      url: '/facilities',
      label: 'MAIN_MENU.FACILITIES',
      style: 'facility-btn',
      clickAction: function (any) {
        return;
      }
    }
  ];

  ngOnInit() {
    this.sideMenuService.setMenuItems([]);
  }
}
