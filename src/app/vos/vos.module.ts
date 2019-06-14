import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VoSelectPageComponent} from './pages/vo-select-page/vo-select-page.component';
import {VosRoutingModule} from './vos-routing.module';
import {SharedModule} from '../shared/shared.module';
import {VoDetailPageComponent} from './pages/vo-detail-page/vo-detail-page.component';
import {GroupDetailPageComponent} from './pages/group-detail-page/group-detail-page.component';
import {GroupsTreeComponent} from './components/groups-tree/groups-tree.component';
import {GroupsListComponent} from './components/groups-list/groups-list.component';
import {VoOverviewComponent} from './pages/vo-detail-page/vo-overview/vo-overview.component';
import {VoGroupsComponent} from './pages/vo-detail-page/vo-groups/vo-groups.component';
import {VoMembersComponent} from './pages/vo-detail-page/vo-members/vo-members.component';
import {MembersListComponent} from './components/members-list/members-list.component';
import {MemberDetailPageComponent} from './pages/member-detail-page/member-detail-page.component';
import {MemberOverviewComponent} from './pages/member-detail-page/member-overview/member-overview.component';
import {MemberGroupsComponent} from './pages/member-detail-page/member-groups/member-groups.component';
import {GroupOverviewComponent} from './pages/group-detail-page/group-overview/group-overview.component';
import {GroupSubgroupsComponent} from './pages/group-detail-page/group-subgroups/group-subgroups.component';
import { VoResourcesComponent } from './pages/vo-detail-page/vo-resources/vo-resources.component';
import { VoApplicationsComponent } from './pages/vo-detail-page/vo-applications/vo-applications.component';
import { VoSettingsComponent } from './pages/vo-detail-page/vo-settings/vo-settings.component';
import { VoSettingsAttributesComponent } from './pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component';
import { VoSettingsOverviewComponent } from './pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component';
import { ResourcesListComponent } from './components/resources-list/resources-list.component';
import { VoSettingsExpirationComponent } from './pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component';
import { ApplicationsListComponent } from './components/applications-list/applications-list.component';
import { GroupApplicationsComponent } from './pages/group-detail-page/group-applications/group-applications.component';
import { MemberGroupsDetailComponent } from './pages/member-detail-page/member-groups/member-groups-detail/member-groups-detail.component';
import { MemberGroupListComponent } from './components/member-group-list/member-group-list.component';
import { VoSettingsManagersComponent } from './pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component';
import { ApplicationDetailComponent } from './components/application-detail/application-detail.component';
import { GroupMembersComponent } from './group-detail-page/group-members/group-members.component';
import {GroupResourcesComponent} from './group-detail-page/group-resources/group-resources.component';

@NgModule({
  imports: [
    CommonModule,
    VosRoutingModule,
    SharedModule
  ],
  exports: [
  ],
  declarations: [
    VoSelectPageComponent,
    VoDetailPageComponent,
    GroupDetailPageComponent,
    GroupsTreeComponent,
    GroupsListComponent,
    VoOverviewComponent,
    VoGroupsComponent,
    VoMembersComponent,
    MembersListComponent,
    MemberDetailPageComponent,
    MemberOverviewComponent,
    MemberGroupsComponent,
    GroupOverviewComponent,
    GroupSubgroupsComponent,
    VoResourcesComponent,
    VoApplicationsComponent,
    VoSettingsComponent,
    VoSettingsAttributesComponent,
    VoSettingsOverviewComponent,
    ResourcesListComponent,
    VoSettingsExpirationComponent,
    ApplicationsListComponent,
    GroupApplicationsComponent,
    MemberGroupsDetailComponent,
    MemberGroupListComponent,
    VoSettingsManagersComponent,
    ApplicationDetailComponent,
    GroupMembersComponent,
    GroupMembersComponent,
    GroupApplicationsComponent,
    GroupResourcesComponent
  ]
})
export class VosModule {
}
