import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';
import {NotificatorService} from '../../../../core/services/common/notificator.service';
import {SelectionModel} from '@angular/cdk/collections';
import {RichUser} from '../../../../core/models/RichUser';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../../../core/services/api/users.service';
import {AuthzService} from '../../../../core/services/api/authz.service';
import {Vo} from '../../../../core/models/Vo';
import {Role} from '../../../../core/models/PerunPrincipal';

export interface AddManagerDialogData {
  vo: Vo;
  theme: string;
}

@Component({
  selector: 'app-add-manager-dialog',
  templateUrl: './add-manager-dialog.component.html',
  styleUrls: ['./add-manager-dialog.component.scss']
})
export class AddManagerDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AddManagerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: AddManagerDialogData,
    private authzService: AuthzService,
    private usersService: UsersService,
    private translate: TranslateService,
    private notificator: NotificatorService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {
    translate.get('DIALOGS.ADD_MANAGERS.TITLE').subscribe(value => this.title = value);
    translate.get('DIALOGS.ADD_MANAGERS.SUCCESS').subscribe(value => this.successMessage = value);
  }

  title: string;
  searchString = '';
  successMessage: string;

  selection = new SelectionModel<RichUser>(true, []);
  loading: boolean;
  users: RichUser[] = [];

  selectedRole: Role;
  firstSearchDone = false;

  theme: string;

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.authzService.setRole(this.selectedRole, this.selection.selected.map(u => u.id), this.data.vo).subscribe(() => {
      this.notificator.showSuccess(this.successMessage);
      this.dialogRef.close();
    });
  }

  onSearchByString() {
    this.loading = true;

    this.selection.clear();

    this.usersService.findRichUsers(this.searchString).subscribe(
      users => {
        this.users = users;
        this.loading = false;
        this.firstSearchDone = true;
      },
      () => this.loading = false
    );
  }

  ngOnInit(): void {
    this.theme = this.data.theme;
  }

}
