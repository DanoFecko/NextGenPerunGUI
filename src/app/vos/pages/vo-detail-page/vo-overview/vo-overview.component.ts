import {Component, HostBinding, OnInit} from '@angular/core';
import {Vo} from '../../../../core/models/Vo';
import {MenuItem} from '../../../../shared/models/MenuItem';
import {InviteMemberDialogComponent} from '../../../../shared/components/dialogs/invite-member-dialog/invite-member-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {SideMenuService} from '../../../../core/services/common/side-menu.service';
import {VoService} from '../../../../core/services/api/vo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthResolverService} from '../../../../core/services/common/auth-resolver.service';

@Component({
  selector: 'app-vo-overview',
  templateUrl: './vo-overview.component.html',
  styleUrls: ['./vo-overview.component.scss']
})
export class VoOverviewComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor(
    private sideMenuService: SideMenuService,
    private voService: VoService,
    protected route: ActivatedRoute,
    protected router: Router,
    protected authResolver: AuthResolverService
  ) {
  }

  vo: Vo;
  items: MenuItem[] = [];

  navItems: MenuItem[] = [];

  ngOnInit(): void {
    this.route.parent.params.subscribe(parentParams => {
      const voId = parentParams['voId'];

      this.voService.getVoById(voId).subscribe(vo => {
        this.vo = vo;

        // this.initItems();
        this.initNavItems();
      });
    });
  }

  private initNavItems() {

    // Members
    if (this.authResolver.isThisVoAdminOrObserver(this.vo.id)) {
      this.navItems.push({
        icon: 'user-white.svg',
        url: `/organizations/${this.vo.id}/members`,
        label: 'MENU_ITEMS.VO.MEMBERS',
        style: 'vo-btn'
      });
    }

    // Groups
    if (this.authResolver.isThisVoAdminOrObserver(this.vo.id)
      || this.authResolver.isGroupAdminInThisVo(this.vo.id)) {
      this.navItems.push({
        icon: 'group-white.svg',
        url: `/organizations/${this.vo.id}/groups`,
        label: 'MENU_ITEMS.VO.GROUPS',
        style: 'vo-btn'
      });
    }

    // Resource management
    if (this.authResolver.isThisVoAdminOrObserver(this.vo.id)) {
      this.navItems.push({
        icon: 'manage_facility_white.svg',
        url: `/organizations/${this.vo.id}/resources`,
        label: 'MENU_ITEMS.VO.RESOURCES',
        style: 'vo-btn'
      });
    }

    // Applications
    if (this.authResolver.isThisVoAdminOrObserver(this.vo.id)) {
      this.navItems.push({
        icon: 'applications-white.svg',
        url: `/organizations/${this.vo.id}/applications`,
        label: 'MENU_ITEMS.VO.APPLICATIONS',
        style: 'vo-btn'
      });
    }

    // Settings
    if (this.authResolver.isThisVoAdminOrObserver(this.vo.id)) {
      this.navItems.push({
        icon: 'settings2-white.svg',
        url: `/organizations/${this.vo.id}/settings`,
        label: 'MENU_ITEMS.VO.SETTINGS',
        style: 'vo-btn'
      });
    }
  }

  private initItems() {
    this.items = [
      {
        icon: 'invite_member-white.svg',
        label: 'VO_DETAIL.OVERVIEW.INVITE_MEMBER',
        style: 'vo-btn',
        url: `/organizations/${this.vo.id}/invite-member`,
        clickAction: function (dialog: MatDialog, voId: number) {
          dialog.open(InviteMemberDialogComponent, {
            width: '450px',
            data: {voId: voId}
          });
        }
      },
      {
        icon: 'service_identity-white.svg',
        label: 'VO_DETAIL.OVERVIEW.CREATE_SERVICE_MEMBER',
        style: 'vo-btn',
        url: `/organizations/${this.vo.id}/create-service-member`,
        clickAction: function (dialog: MatDialog, voId: number) {
          return;
        }
      },
      {
        icon: 'manager-white.svg',
        label: 'VO_DETAIL.OVERVIEW.ADD_MANAGER',
        style: 'vo-btn',
        url: `/organizations/${this.vo.id}/add-manager`,
        clickAction: function (dialog: MatDialog, voId: number) {
          return;
        }
      },
      {
        icon: 'group-white.svg',
        label: 'VO_DETAIL.OVERVIEW.CREATE_GROUP',
        style: 'vo-btn',
        url: `/organizations/${this.vo.id}/create-group`,
        clickAction: function (dialog: MatDialog, voId: number) {
          return;
        }
      },
      {
        icon: 'create1-white.svg',
        label: 'VO_DETAIL.OVERVIEW.ADD_MEMBER',
        style: 'vo-btn',
        url: `/organizations/${this.vo.id}/invite-member`,
        clickAction: function (dialog: MatDialog, voId: number) {
          return;
        }
      }
    ];
  }
}
