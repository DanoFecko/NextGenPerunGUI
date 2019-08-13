import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {VoService} from '../../../../core/services/api/vo.service';
import {TranslateService} from '@ngx-translate/core';
import {NotificatorService} from '../../../../core/services/common/notificator.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
import {Group} from '../../../../core/models/Group';
import {Vo} from '../../../../core/models/Vo';
import {GroupService} from '../../../../core/services/api/group.service';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {AuthzService} from '../../../../core/services/api/authz.service';

export interface AddGroupManagerDialogData {
  groups: Group[];
  vo: Vo;
  role: string;
  theme: string;
}

@Component({
  selector: 'app-add-group-manager-dialog',
  templateUrl: './add-group-manager-dialog.component.html',
  styleUrls: ['./add-group-manager-dialog.component.scss']
})
export class AddGroupManagerDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AddGroupManagerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: AddGroupManagerDialogData,
    private voService: VoService,
    private authzService: AuthzService,
    private groupService: GroupService,
    private translate: TranslateService,
    private notificator: NotificatorService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {
    translate.get('DIALOGS.ADD_GROUPS.TITLE').subscribe(value => this.title = value);
    translate.get('DIALOGS.ADD_GROUPS.SUCCESS').subscribe(value => this.successMessage = value);
  }

  title: string;
  searchString = '';
  successMessage: string;

  selection = new SelectionModel<Group>(false, []);
  loading: boolean;
  groups: Group[] = [];
  selected: number;
  vos: Vo[] = [];

  filteredOptions: Observable<Vo[]>;
  myControl = new FormControl();
  firstSearchDone = false;

  theme: string;

  displayFn(vo?: Vo): string | undefined {
    return vo ? vo.name : null;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    // TODO Adds only one group at the time. In the future there would be need to add more
    this.authzService.addGroup( this.data.role, this.selection.selected[0].id, this.data.vo).subscribe(() => {
      this.notificator.showSuccess(this.successMessage);
      this.dialogRef.close();
    });
  }

  ngOnInit() {
    this.theme = this.data.theme;
    this.voService.getVos().subscribe(vos => {
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );

      this.vos = vos;
    });
  }

  private _filter(value: string | Vo): Vo[] {
    const filterValue = typeof (value) === 'string' ? value.toLowerCase() : value.name.toLowerCase;
    return this.vos.filter(option => option.name.toLowerCase().includes(<string>filterValue));
  }

  showVoGroups() {
    this.loading = true;
    this.filteredOptions.subscribe( values => {
      if ( values.length !== 0) {
        this.selected = values[0].id;

        this.groupService.getAllGroups(this.selected).subscribe(groups => {
          this.groups = groups;
          this.loading = false;
          this.firstSearchDone = true;
        });
      }
    });
  }
}
