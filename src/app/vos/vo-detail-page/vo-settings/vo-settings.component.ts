import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../../../shared/models/MenuItem';
import {SideMenuService} from '../../../core/services/common/side-menu.service';
import {VoService} from '../../../core/services/api/vo.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Vo} from '../../../core/models/Vo';

@Component({
  selector: 'app-vo-settings',
  templateUrl: './vo-settings.component.html',
  styleUrls: ['./vo-settings.component.scss']
})
export class VoSettingsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.currentUrl = router.url;
    this.backButtonDisplayed = this.backButtonRegex.test(this.currentUrl);

    router.events.subscribe((_: NavigationEnd) => {
      if (_ instanceof NavigationEnd) {
        this.currentUrl = _.url;

        this.backButtonDisplayed = this.backButtonRegex.test(this.currentUrl);
      }
    });
  }

  backButtonRegex = new RegExp('/organizations/\\d+/settings/\\w+$');
  currentUrl;
  backButtonDisplayed = false;

  voId: number;

  ngOnInit(): void {
    this.route.parent.params.subscribe(parentParams => {
      this.voId = parentParams['voId'];
    });
  }
}
