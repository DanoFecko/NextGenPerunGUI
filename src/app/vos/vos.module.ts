import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VoSelectPageComponent} from './vo-select-page/vo-select-page.component';
import {VosRoutingModule} from './vos-routing.module';
import {SharedModule} from '../shared/shared.module';
import {VoDetailPageComponent} from './vo-detail-page/vo-detail-page.component';
import {GroupDetailPageComponent} from './group-detail-page/group-detail-page.component';
import {GroupsTreeComponent} from './groups-tree/groups-tree.component';
import {GroupsListComponent} from './groups-list/groups-list.component';
import {VoOverviewComponent} from './vo-detail-page/vo-overview/vo-overview.component';
import {VoGroupsComponent} from './vo-detail-page/vo-groups/vo-groups.component';
import {VoMembersComponent} from './vo-detail-page/vo-members/vo-members.component';
import {MembersListComponent} from './members-list/members-list.component';
import {MemberDetailPageComponent} from './member-detail-page/member-detail-page.component';
import {MemberOverviewComponent} from './member-detail-page/member-overview/member-overview.component';
import {MemberGroupsComponent} from './member-detail-page/member-groups/member-groups.component';
import {GroupOverviewComponent} from './group-detail-page/group-overview/group-overview.component';
import {GroupSubgroupsComponent} from './group-detail-page/group-subgroups/group-subgroups.component';
import { VoResourcesComponent } from './vo-detail-page/vo-resources/vo-resources.component';
import { VoApplicationsComponent } from './vo-detail-page/vo-applications/vo-applications.component';
import { VoSettingsComponent } from './vo-detail-page/vo-settings/vo-settings.component';
import { VoSettingsAttributesComponent } from './vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component';
import { VoSettingsOverviewComponent } from './vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component';
import { ResourcesListComponent } from './resources-list/resources-list.component';
import { VoSettingsExpirationComponent } from './vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component';
import { ApplicationsListComponent } from './applications-list/applications-list.component';
import { GroupApplicationsComponent } from './group-detail-page/group-applications/group-applications.component';

@NgModule({
  imports: [
    CommonModule,
    VosRoutingModule,
    SharedModule
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
    GroupApplicationsComponent
  ]
})
export class VosModule {
}
