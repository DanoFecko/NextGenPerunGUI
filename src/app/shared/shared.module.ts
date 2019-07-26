import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PerunNavComponent} from './perun-nav/perun-nav.component';
import {RouterModule} from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {SideMenuItemComponent} from './side-menu/side-menu-item/side-menu-item.component';
import {MenuButtonsFieldComponent} from './components/menu-buttons-field/menu-buttons-field.component';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {CreateGroupDialogComponent} from './components/dialogs/create-group-dialog/create-group-dialog.component';
import {InviteMemberDialogComponent} from './components/dialogs/invite-member-dialog/invite-member-dialog.component';
import {UserFullNamePipe} from './pipes/user-full-name.pipe';
import {DeleteGroupDialogComponent} from './components/dialogs/delete-group-dialog/delete-group-dialog.component';
import {BackButtonComponent} from './components/back-button/back-button.component';
import {SettingsToggleItemComponent} from './components/settings-toggle-item/settings-toggle-item.component';
import { ResourceTagsToStringPipe } from './pipes/resource-tags-to-string.pipe';
import { ApplicationStatePipe } from './pipes/application-state.pipe';
import { NotificatorComponent } from './components/notificator/notificator.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationDialogComponent } from './components/notification-dialog/notification-dialog.component';
import { AttributeTypeCleanPipe } from './pipes/attribute-type-clean.pipe';
import { NameSpaceToDefPipe } from './pipes/name-space-to-def.pipe';
import {UsersListComponent} from './components/users-list/users-list.component';
import { ApplicationReSendNotificationDialogComponent
} from './components/dialogs/application-re-send-notification-dialog/application-re-send-notification-dialog.component';
import { ApplicationRejectDialogComponent } from './components/dialogs/application-reject-dialog/application-reject-dialog.component';
import { AnyToStringPipe } from './pipes/any-to-string.pipe';
import { DeleteAttributeDialogComponent } from './components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component';
import { MemberStatusIconPipe } from './pipes/member-status-icon.pipe';
import { MemberStatusIconColorPipe } from './pipes/member-status-icon-color.pipe';
import { MemberEmailPipe } from './pipes/member-email.pipe';
import { MemberLoginsPipe } from './pipes/member-logins.pipe';
import { RemoveMembersDialogComponent } from './components/dialogs/remove-members-dialog/remove-members-dialog.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SideMenuRootItemComponent } from './side-menu/side-menu-root-item/side-menu-root-item.component';
import { DebuggerPageComponent } from './debugger-page/debugger-page.component';
import { TechnicalOwnersPipe } from './pipes/technical-owners.pipe';
import { RemoveResourceDialogComponent } from './components/dialogs/remove-resource-dialog/remove-resource-dialog.component';
import {ResourcesListComponent} from './components/resources-list/resources-list.component';
import {GroupsListComponent} from './components/groups-list/groups-list.component';
import { ApplicationFormItemTypePipe } from './pipes/application-form-item-type.pipe';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {
  UpdateApplicationFormDialogComponent
} from './components/dialogs/update-application-form-dialog/update-application-form-dialog.component';
import {
  DeleteApplicationFormItemDialogComponent
} from './components/dialogs/delete-application-form-item-dialog/delete-application-form-item-dialog.component';
import {
  ApplicationFormCopyItemsDialogComponent
} from './components/dialogs/application-form-copy-items-dialog/application-form-copy-items-dialog.component';
import {
  AddApplicationFormItemDialogComponent
} from './components/dialogs/add-application-form-item-dialog/add-application-form-item-dialog.component';
import {
  EditApplicationFormItemDialogComponent
} from './components/dialogs/edit-application-form-item-dialog/edit-application-form-item-dialog.component';
import { ApplicationFormWidgetDescriptionPipe } from './pipes/application-form-widget-description.pipe';
import {
  DeleteApplicationFormMailDialogComponent
} from './components/dialogs/delete-application-form-mail-dialog/delete-application-form-mail-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    TranslateModule.forChild({}),
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatDividerModule,
    MatRippleModule,
    MatPaginatorModule,
    MatCardModule,
    MatStepperModule,
    NgxGraphModule,
    NgxChartsModule,
    DragDropModule,
    NgxChartsModule,
    MatCardModule,
  ],
  exports: [
    PerunNavComponent,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    SideMenuComponent,
    MatSidenavModule,
    TranslateModule,
    MenuButtonsFieldComponent,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    UserFullNamePipe,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTooltipModule,
    BackButtonComponent,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatDividerModule,
    MatCardModule,
    MatStepperModule,
    SettingsToggleItemComponent,
    MatRippleModule,
    ResourceTagsToStringPipe,
    ApplicationStatePipe,
    MatPaginatorModule,
    NotificatorComponent,
    AttributeTypeCleanPipe,
    NameSpaceToDefPipe,
    UsersListComponent,
    MemberStatusIconPipe,
    MemberStatusIconColorPipe,
    MemberEmailPipe,
    MemberLoginsPipe,
    NgxGraphModule,
    NgxChartsModule,
    TechnicalOwnersPipe,
    ResourcesListComponent,
    GroupsListComponent,
    ApplicationFormItemTypePipe,
    DragDropModule,
    ApplicationFormWidgetDescriptionPipe,
    GroupsListComponent,
    ResourcesListComponent,
    TechnicalOwnersPipe,
    UsersListComponent,
    AnyToStringPipe,
  ],
  entryComponents: [
    CreateGroupDialogComponent,
    InviteMemberDialogComponent,
    DeleteGroupDialogComponent,
    NotificationDialogComponent,
    ApplicationReSendNotificationDialogComponent,
    ApplicationRejectDialogComponent,
    RemoveMembersDialogComponent,
    RemoveResourceDialogComponent,
    UpdateApplicationFormDialogComponent,
    DeleteApplicationFormItemDialogComponent,
    ApplicationFormCopyItemsDialogComponent,
    AddApplicationFormItemDialogComponent,
    EditApplicationFormItemDialogComponent,
    DeleteApplicationFormMailDialogComponent,
    RemoveResourceDialogComponent,
    RemoveMembersDialogComponent,
    ApplicationRejectDialogComponent,
    DeleteAttributeDialogComponent,
  ],
  declarations: [
    PerunNavComponent,
    SideMenuComponent,
    SideMenuItemComponent,
    MenuButtonsFieldComponent,
    CreateGroupDialogComponent,
    InviteMemberDialogComponent,
    UserFullNamePipe,
    BackButtonComponent,
    DeleteGroupDialogComponent,
    SettingsToggleItemComponent,
    ResourceTagsToStringPipe,
    ApplicationStatePipe,
    NotificatorComponent,
    NotificationComponent,
    NotificationDialogComponent,
    AttributeTypeCleanPipe,
    NameSpaceToDefPipe,
    UsersListComponent,
    ApplicationStatePipe,
    ApplicationReSendNotificationDialogComponent,
    ApplicationRejectDialogComponent,
    MemberStatusIconPipe,
    MemberStatusIconColorPipe,
    MemberEmailPipe,
    MemberLoginsPipe,
    RemoveMembersDialogComponent,
    SideMenuRootItemComponent,
    DebuggerPageComponent,
    TechnicalOwnersPipe,
    RemoveResourceDialogComponent,
    ResourcesListComponent,
    GroupsListComponent,
    ApplicationFormItemTypePipe,
    UpdateApplicationFormDialogComponent,
    DeleteApplicationFormItemDialogComponent,
    ApplicationFormCopyItemsDialogComponent,
    AddApplicationFormItemDialogComponent,
    EditApplicationFormItemDialogComponent,
    ApplicationFormWidgetDescriptionPipe,
    DeleteApplicationFormMailDialogComponent,
    GroupsListComponent,
    ResourcesListComponent,
    TechnicalOwnersPipe,
    SideMenuRootItemComponent,
    ApplicationRejectDialogComponent,
    AnyToStringPipe,
    DeleteAttributeDialogComponent,
  ],
  providers: [
    AnyToStringPipe,
  ]
})
export class SharedModule {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'cs']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
