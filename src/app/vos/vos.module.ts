import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VoSelectPageComponent} from './pages/vo-select-page/vo-select-page.component';
import {VosRoutingModule} from './vos-routing.module';
import {SharedModule} from '../shared/shared.module';
import {VoDetailPageComponent} from './pages/vo-detail-page/vo-detail-page.component';
import {GroupDetailPageComponent} from './pages/group-detail-page/group-detail-page.component';
import {GroupsTreeComponent} from './components/groups-tree/groups-tree.component';
import {VoOverviewComponent} from './pages/vo-detail-page/vo-overview/vo-overview.component';
import {VoGroupsComponent} from './pages/vo-detail-page/vo-groups/vo-groups.component';
import {VoMembersComponent} from './pages/vo-detail-page/vo-members/vo-members.component';
import {MembersListComponent} from './components/members-list/members-list.component';
import {MemberDetailPageComponent} from './pages/member-detail-page/member-detail-page.component';
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
import {ApplicationsListComponent} from './components/applications-list/applications-list.component';
import {GroupApplicationsComponent} from './pages/group-detail-page/group-applications/group-applications.component';
import {MemberGroupListComponent} from './components/member-group-list/member-group-list.component';
import {VoSettingsManagersComponent} from './pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component';
import {ApplicationDetailComponent} from './components/application-detail/application-detail.component';
import {GroupMembersComponent} from './pages/group-detail-page/group-members/group-members.component';
import {GroupResourcesComponent} from './pages/group-detail-page/group-resources/group-resources.component';
import {VoSelectTableComponent} from './components/vo-select-table/vo-select-table.component';
// tslint:disable-next-line:max-line-length
import {GroupSettingsComponent} from './pages/group-detail-page/group-settings/group-settings.component';
import {
  GroupSettingsAttributesComponent
} from './pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component';
import {
  GroupSettingsOverviewComponent
} from './pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component';
import {
  VoSettingsApplicationFormComponent
} from './pages/vo-detail-page/vo-settings/vo-settings-application-form/vo-settings-application-form.component';
import {ApplicationFormListComponent} from './components/application-form-list/application-form-list.component';
// tslint:disable-next-line:max-line-length
import {ApplicationFormPreviewComponent} from './components/application-form-preview/application-form-preview.component';
import { MemberSettingsComponent } from './pages/member-detail-page/member-settings/member-settings.component';
import {
  MemberSettingsAttributesComponent
} from './pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component';
import {
  MemberSettingsOverviewComponent
} from './pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component';
import {AttributesListComponent} from '../shared/components/attributes-list/attributes-list.component';
import {VoResourcesPreviewComponent} from './pages/vo-detail-page/vo-resources/vo-resources-preview/vo-resources-preview.component';
import {VoResourcesTagsComponent} from './pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component';
import {VoResourcesStatesComponent} from './pages/vo-detail-page/vo-resources/vo-resources-states/vo-resources-states.component';
import {VoResourcesOverviewComponent} from './pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component';
import {StateTabComponent} from './pages/vo-detail-page/vo-resources/vo-resources-states/state-tab/state-tab.component';
import {
  GroupSettingsExpirationComponent
} from './pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component';
import { ExpirationSettingsComponent } from './components/expiration-settings/expiration-settings.component';
import {
  VoSettingsNotificationsComponent
} from './pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component';
import {
  GroupSettingsApplicationFormComponent
} from './pages/group-detail-page/group-settings/group-settings-application-form/group-settings-application-form.component';

@NgModule({
  imports: [
    CommonModule,
    VosRoutingModule,
    SharedModule
  ],
  exports: [
    AttributesListComponent,
    MembersListComponent
  ],
  declarations: [
    VoSelectPageComponent,
    VoDetailPageComponent,
    GroupDetailPageComponent,
    GroupsTreeComponent,
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
    VoSettingsExpirationComponent,
    ApplicationsListComponent,
    GroupApplicationsComponent,
    MemberGroupListComponent,
    VoSettingsManagersComponent,
    ApplicationDetailComponent,
    GroupMembersComponent,
    GroupMembersComponent,
    GroupApplicationsComponent,
    GroupResourcesComponent,
    VoSelectTableComponent,
    GroupSettingsComponent,
    GroupSettingsAttributesComponent,
    GroupSettingsOverviewComponent,
    VoSettingsApplicationFormComponent,
    ApplicationFormListComponent,
    ApplicationFormPreviewComponent,
    GroupSettingsOverviewComponent,
    VoSelectTableComponent,
    MemberSettingsComponent,
    MemberSettingsAttributesComponent,
    MemberSettingsOverviewComponent,
    VoResourcesPreviewComponent,
    VoResourcesTagsComponent,
    VoResourcesStatesComponent,
    VoResourcesOverviewComponent,
    StateTabComponent,
    GroupSettingsExpirationComponent,
    ExpirationSettingsComponent,
    VoSettingsNotificationsComponent,
    GroupSettingsApplicationFormComponent
  ],
  entryComponents: [
  ],
})
export class VosModule {
}
