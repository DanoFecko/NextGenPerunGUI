import {RouterModule, Routes} from '@angular/router';
import {VoSelectPageComponent} from './vo-select-page/vo-select-page.component';
import {NgModule} from '@angular/core';
import {GroupDetailPageComponent} from './group-detail-page/group-detail-page.component';
import {MemberDetailPageComponent} from './member-detail-page/member-detail-page.component';
import {VoOverviewComponent} from './vo-detail-page/vo-overview/vo-overview.component';
import {VoGroupsComponent} from './vo-detail-page/vo-groups/vo-groups.component';
import {VoMembersComponent} from './vo-detail-page/vo-members/vo-members.component';
import {VoDetailPageComponent} from './vo-detail-page/vo-detail-page.component';
import {MemberOverviewComponent} from './member-detail-page/member-overview/member-overview.component';
import {MemberGroupsComponent} from './member-detail-page/member-groups/member-groups.component';
import {GroupOverviewComponent} from './group-detail-page/group-overview/group-overview.component';
import {GroupSubgroupsComponent} from './group-detail-page/group-subgroups/group-subgroups.component';
import {VoResourcesComponent} from './vo-detail-page/vo-resources/vo-resources.component';
import {VoApplicationsComponent} from './vo-detail-page/vo-applications/vo-applications.component';
import {VoSettingsComponent} from './vo-detail-page/vo-settings/vo-settings.component';
import {VoSettingsAttributesComponent} from './vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component';
import {VoSettingsOverviewComponent} from './vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component';
import {VoSettingsExpirationComponent} from './vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component';
import {GroupApplicationsComponent} from './group-detail-page/group-applications/group-applications.component';

const routes: Routes = [
  {
    path: '',
    component: VoSelectPageComponent
  },
  {
    path: ':voId',
    component: VoDetailPageComponent,
    children: [
      {
        path: '',
        component: VoOverviewComponent
      },
      {
        path: 'groups',
        component: VoGroupsComponent
      },
      {
        path: 'members',
        component: VoMembersComponent
      },
      {
        path: 'resources',
        component: VoResourcesComponent
      },
      {
        path: 'applications',
        component: VoApplicationsComponent
      },
      {
        path: 'settings',
        component: VoSettingsComponent,
        children: [
          {
            path: '',
            component: VoSettingsOverviewComponent
          },
          {
            path: 'attributes',
            component: VoSettingsAttributesComponent
          },
          {
            path: 'expiration',
            component: VoSettingsExpirationComponent
          }
        ]
      }
    ]
  },
  {
    path: ':voId/members/:memberId',
    component: MemberDetailPageComponent,
    children: [
      {
        path: '',
        component: MemberOverviewComponent
      },
      {
        path: 'groups',
        component: MemberGroupsComponent
      }
    ]
  },
  {
    path: ':voId/groups/:groupId',
    component: GroupDetailPageComponent,
    children: [
      {
        path: '',
        component: GroupOverviewComponent
      },
      {
        path: 'subgroups',
        component: GroupSubgroupsComponent
      },
      {
        path: 'applications',
        component: GroupApplicationsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VosRoutingModule { }
