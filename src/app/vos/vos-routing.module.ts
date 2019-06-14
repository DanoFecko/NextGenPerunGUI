import {RouterModule, Routes} from '@angular/router';
import {VoSelectPageComponent} from './pages/vo-select-page/vo-select-page.component';
import {NgModule} from '@angular/core';
import {GroupDetailPageComponent} from './pages/group-detail-page/group-detail-page.component';
import {MemberDetailPageComponent} from './pages/member-detail-page/member-detail-page.component';
import {VoOverviewComponent} from './pages/vo-detail-page/vo-overview/vo-overview.component';
import {VoGroupsComponent} from './pages/vo-detail-page/vo-groups/vo-groups.component';
import {VoMembersComponent} from './pages/vo-detail-page/vo-members/vo-members.component';
import {VoDetailPageComponent} from './pages/vo-detail-page/vo-detail-page.component';
import {MemberOverviewComponent} from './pages/member-detail-page/member-overview/member-overview.component';
import {MemberGroupsComponent} from './pages/member-detail-page/member-groups/member-groups.component';
import {GroupOverviewComponent} from './pages/group-detail-page/group-overview/group-overview.component';
import {GroupSubgroupsComponent} from './pages/group-detail-page/group-subgroups/group-subgroups.component';
import {VoResourcesComponent} from './pages/vo-detail-page/vo-resources/vo-resources.component';
import {VoApplicationsComponent} from './pages/vo-detail-page/vo-applications/vo-applications.component';
import {VoSettingsComponent} from './pages/vo-detail-page/vo-settings/vo-settings.component';
import {VoSettingsAttributesComponent} from './pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component';
import {VoSettingsOverviewComponent} from './pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component';
import {VoSettingsExpirationComponent} from './pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component';
import {GroupApplicationsComponent} from './pages/group-detail-page/group-applications/group-applications.component';
import {MemberGroupsDetailComponent} from './pages/member-detail-page/member-groups/member-groups-detail/member-groups-detail.component';
import {VoSettingsManagersComponent} from './pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component';
import {ApplicationDetailComponent} from './components/application-detail/application-detail.component';
import {GroupMembersComponent} from './group-detail-page/group-members/group-members.component';
import {GroupResourcesComponent} from './group-detail-page/group-resources/group-resources.component';

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
        path: 'applications/:applicationId',
        component: ApplicationDetailComponent
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
          },
          {
            path: 'managers',
            component: VoSettingsManagersComponent
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
      },
      {
        path: 'groups/:memberGroupId',
        component: MemberGroupsDetailComponent
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
        path: 'members',
        component: GroupMembersComponent
      },
      {
        path: 'subgroups',
        component: GroupSubgroupsComponent
      },
      {
        path: 'applications',
        component: GroupApplicationsComponent
      },
      {
        path: 'resources',
        component: GroupResourcesComponent
      },
      {
        path: 'applications/:applicationId',
        component: ApplicationDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VosRoutingModule { }
