import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {SideMenuItem} from '../side-menu.component';
import {NavigationEnd, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {openClose} from '../../animations/Animations';

@Component({
  selector: 'app-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.scss'],
  animations: [
    openClose
  ]
})
export class SideMenuItemComponent implements OnInit {

  private currentUrl: string;

  constructor(
    private router: Router
  ) {
    this.currentUrl = router.url;

    router.events.subscribe((_: NavigationEnd) => {
      if (_ instanceof NavigationEnd) {
        this.currentUrl = _.url;
      }
    });
  }

  @Input()
  item: SideMenuItem;

  @Input()
  index: number;

  @Input()
  showOpen: boolean;

  @ViewChild('collapse') collapseDiv: ElementRef;

  expanded = false;

  ngOnInit() {
    this.expanded = this.showOpen;
  }

  // TODO
  isExpanded() {
    return this.expanded;
  }

  toggle() {
    this.expanded = !this.expanded;
  }

  isActive(currentUrl: string, regexValue: string) {
    const regexp = new RegExp(regexValue);

    return regexp.test(currentUrl);
  }
}
