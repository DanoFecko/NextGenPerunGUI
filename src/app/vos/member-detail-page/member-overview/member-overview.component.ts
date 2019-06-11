import {Component, OnInit} from '@angular/core';
import {RichMember} from '../../../core/models/RichMember';
import {UtilsService} from '../../../shared/utils.service';
import {Urns} from '../../../shared/Urns';
import {AttributesService} from '../../../core/services/attributes.service';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {MembersService} from '../../../core/services/members.service';
import {MenuItem} from '../../../shared/MenuItem';

@Component({
  selector: 'app-member-overview',
  templateUrl: './member-overview.component.html',
  styleUrls: ['./member-overview.component.scss']
})
export class MemberOverviewComponent implements OnInit {

  constructor(
    private utils: UtilsService,
    private attributeService: AttributesService,
    private membersService: MembersService,
    private translate: TranslateService,
    private route: ActivatedRoute
  ) { }

  fullName = '';
  statusIcon = '';
  statusIconColor = '';
  expiration = '';

  member: RichMember = null;
  navItems: MenuItem[] = [];

  ngOnInit() {
    this.route.parent.params.subscribe(parentParams => {
      const memberId = parentParams['memberId'];

      this.membersService.getRichMemberWithAttributes(memberId).subscribe(member => {
        this.member = member;
        this.fullName = this.utils.parseFullName(this.member.user);
        this.statusIcon = this.utils.parseStatusIcon(this.member);
        this.statusIconColor = this.utils.parseStatusColor(this.member);

        this.initNavItems();

        this.attributeService.getMemberAttribute(this.member.id, Urns.MEMBER_DEF_EXPIRATION).subscribe(attr => {
          this.expiration = attr.value === null ? this.translate.instant('MEMBER_DETAIL.OVERVIEW.NEVER_EXPIRES') : attr.value;
        });
      });
    });
  }

  private initNavItems() {
    this.navItems = [
      {
        icon: 'group-white.svg',
        url: `/organizations/${this.member.voId}/members/${this.member.id}/groups`,
        label: 'MENU_ITEMS.MEMBER.GROUPS',
        style: 'member-btn'
      }
    ];
  }
}
