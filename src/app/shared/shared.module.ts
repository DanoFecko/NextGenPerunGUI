import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PerunNavComponent} from './perun-nav/perun-nav.component';
import {RouterModule} from '@angular/router';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {SideMenuItemComponent} from './side-menu/side-menu-item/side-menu-item.component';
import {MenuButtonsFieldComponent} from './components/menu-buttons-field/menu-buttons-field.component';
import {TranslateModule} from '@ngx-translate/core';
import {CreateGroupDialogComponent} from './components/dialogs/create-group-dialog/create-group-dialog.component';
import {InviteMemberDialogComponent} from './components/dialogs/invite-member-dialog/invite-member-dialog.component';
import {UserFullNamePipe} from './pipes/user-full-name.pipe';
import {TabComponent} from './components/tab.component';
import {TabPage} from './TabPage';
import {DeleteGroupDialogComponent} from './components/dialogs/delete-group-dialog/delete-group-dialog.component';
import {BackButtonComponent} from './components/back-button/back-button.component';
import {SettingsToggleItemComponent} from './components/settings-toggle-item/settings-toggle-item.component';
import { ResourceTagsToStringPipe } from './pipes/resource-tags-to-string.pipe';

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
    TranslateModule,
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
    TabComponent,
    TabPage,
    MatProgressBarModule,
    MatTooltipModule,
    BackButtonComponent,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatDividerModule,
    SettingsToggleItemComponent,
    MatRippleModule,
    ResourceTagsToStringPipe,
  ],
  entryComponents: [
    CreateGroupDialogComponent,
    InviteMemberDialogComponent,
    DeleteGroupDialogComponent
  ],
  declarations: [
    PerunNavComponent,
    SideMenuComponent,
    SideMenuItemComponent,
    MenuButtonsFieldComponent,
    CreateGroupDialogComponent,
    InviteMemberDialogComponent,
    UserFullNamePipe,
    TabComponent,
    TabPage,
    BackButtonComponent,
    DeleteGroupDialogComponent,
    SettingsToggleItemComponent,
    ResourceTagsToStringPipe
  ]
})
export class SharedModule { }
