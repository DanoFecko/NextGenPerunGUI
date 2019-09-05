import {Component, HostBinding, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AttributesService} from '../../../../../core/services/api/attributes.service';
import {NotificatorService} from '../../../../../core/services/common/notificator.service';
import {MatDialog} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';
import {AttributesListComponent} from '../../../../../shared/components/attributes-list/attributes-list.component';
import {SelectionModel} from '@angular/cdk/collections';
import {Attribute} from '../../../../../core/models/Attribute';
import {filterCoreAttributes} from '../../../../../shared/utils';
import {
  CreateAttributeDialogComponent
} from '../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component';
import {
  DeleteAttributeDialogComponent
} from '../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component';

@Component({
  selector: 'app-member-settings-attributes',
  templateUrl: './member-settings-attributes.component.html',
  styleUrls: ['./member-settings-attributes.component.scss']
})
export class MemberSettingsAttributesComponent implements OnInit {

  @HostBinding('class.router-component') true;
  constructor(
    private route: ActivatedRoute,
    private attributesService: AttributesService,
    private notificator: NotificatorService,
    private dialog: MatDialog,
    private translate: TranslateService
  ) {
    this.translate.get('MEMBER_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE').subscribe(value => this.saveSuccessMessage = value);
    this.translate.get('MEMBER_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE').subscribe(value => this.deleteSuccessMessage = value);
  }

  @ViewChild('list', {static: false})
  list: AttributesListComponent;

  saveSuccessMessage: string;
  deleteSuccessMessage: string;
  selection = new SelectionModel<Attribute>(true, []);
  attributes: Attribute[] = [];
  memberId: number;

  loading: boolean;

  ngOnInit() {
    this.route.parent.parent.params.subscribe(params => {
      this.memberId = params['memberId'];
      this.refreshTable();
    });
  }

  onCreate() {
    const dialogRef = this.dialog.open(CreateAttributeDialogComponent, {
      width: '1050px',
      data: {
        entityId: this.memberId,
        entity: 'member',
        notEmptyAttributes: this.attributes,
        style: 'member-theme'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refreshTable();
      }
    });
  }

  onSave() {
    // have to use this to update attribute with map in it, before saving it
    this.list.updateMapAttributes();
    this.attributesService.setAttributes(this.memberId, 'member', this.selection.selected).subscribe(() => {
      this.attributesService.getAllAttributes(this.memberId, 'member').subscribe(attributes => {
        this.attributes = filterCoreAttributes(attributes);
        this.notificator.showSuccess(this.saveSuccessMessage);
        this.selection.clear();
      });
    });
  }

  onDelete() {
    const dialogRef = this.dialog.open(DeleteAttributeDialogComponent, {
      width: '450px',
      data: {
        entityId: this.memberId,
        entity: 'member',
        attributes: this.selection.selected
      }
    });

    dialogRef.afterClosed().subscribe(didConfirm => {
      if (didConfirm) {
        this.refreshTable();
      }
    });
  }

  refreshTable() {
    this.loading = true;
    this.attributesService.getAllAttributes(this.memberId, 'member').subscribe(attributes => {
      this.attributes = filterCoreAttributes(attributes);
      this.selection.clear();
      this.loading = false;
    });
  }
}
