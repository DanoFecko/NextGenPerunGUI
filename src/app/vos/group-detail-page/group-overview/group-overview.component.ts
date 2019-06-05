import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../../../shared/MenuItem';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-group-overview',
  templateUrl: './group-overview.component.html',
  styleUrls: ['./group-overview.component.scss']
})
export class GroupOverviewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  navItems: MenuItem[] = [];
  voId: number;
  groupId: number;

  ngOnInit() {
    this.route.parent.params.subscribe(parentParams => {
      this.voId = parentParams['voId'];

      this.route.params.subscribe(params => {
        this.groupId = params['groupId'];

        this.initNavItems();
      });
    });
  }

  private initNavItems() {
    this.navItems = [
      {
        icon: 'user-white.svg',
        url: `/organizations/${this.voId}/groups/${this.groupId}/members`,
        label: 'MENU_ITEMS.GROUP.MEMBERS',
        style: 'group-btn'
      },
      {
        icon: 'group-white.svg',
        url: `/organizations/${this.voId}/groups/${this.groupId}/subgroups`,
        label: 'MENU_ITEMS.GROUP.SUBGROUPS',
        style: 'group-btn'
      },
      {
        icon: 'resource-white.svg',
        url: `/organizations/${this.voId}/groups/${this.groupId}/resources`,
        label: 'MENU_ITEMS.GROUP.RESOURCES',
        style: 'group-btn'
      },
      {
        icon: 'applications-white.svg',
        url: `/organizations/${this.voId}/groups/${this.groupId}/applications`,
        label: 'MENU_ITEMS.GROUP.APPLICATIONS',
        style: 'group-btn'
      },
      {
        icon: 'settings2-white.svg',
        url: `/organizations/${this.voId}/groups/${this.groupId}/settings`,
        label: 'MENU_ITEMS.GROUP.SETTINGS',
        style: 'group-btn'
      },
    ];
  }
}
