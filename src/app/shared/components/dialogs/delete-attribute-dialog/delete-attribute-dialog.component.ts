import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource} from '@angular/material';
import {NotificatorService} from '../../../../core/services/common/notificator.service';
import {TranslateService} from '@ngx-translate/core';
import {Attribute} from '../../../../core/models/Attribute';
import {AttributesService} from '../../../../core/services/api/attributes.service';

export interface DeleteAttributeDialogData {
  voId: number;
  attributes: Attribute[];
}

@Component({
  selector: 'app-delete-attribute-dialog',
  templateUrl: './delete-attribute-dialog.component.html',
  styleUrls: ['./delete-attribute-dialog.component.scss']
})
export class DeleteAttributeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteAttributeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DeleteAttributeDialogData,
              private notificator: NotificatorService,
              private translate: TranslateService,
              private attributeService: AttributesService) {
  }

  displayedColumns: string[] = ['name'];
  dataSource: MatTableDataSource<Attribute>;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Attribute>(this.data.attributes);
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  onSubmit() {
    const ids: number[] = [];
    for (const attr of this.data.attributes) {
      ids.push(attr.id);
    }
    this.attributeService.deleteVoAttributes(this.data.voId, ids).subscribe(() => {
      this.translate.get('DIALOGS.DELETE_ATTRIBUTES.SUCCESS').subscribe(successMessage => {
        this.notificator.showSuccess(successMessage);
        this.dialogRef.close(true);
      });
    });
  }
}
