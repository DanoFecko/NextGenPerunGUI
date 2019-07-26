import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {AttributesService} from '../../../../core/services/api/attributes.service';
import {Attribute} from '../../../../core/models/Attribute';
import {AttributesListComponent} from '../../attributes-list/attributes-list.component';
import {NotificatorService} from '../../../../core/services/common/notificator.service';
import {TranslateService} from '@ngx-translate/core';

export interface CreateAttributeDialogData {
  voId: number;
  notEmptyAttributes: Attribute[];
  style?: string;
}

@Component({
  selector: 'app-create-attribute-dialog',
  templateUrl: './create-attribute-dialog.component.html',
  styleUrls: ['./create-attribute-dialog.component.scss']
})

export class CreateAttributeDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CreateAttributeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: CreateAttributeDialogData,
              private attributesService: AttributesService,
              private notificator: NotificatorService,
              private translate: TranslateService) {
    this.translate.get('DIALOGS.CREATE_ATTRIBUTE.SUCCESS_SAVE').subscribe(value => this.saveSuccessMessage = value);
  }

  @ViewChild('list', {static: false})
  list: AttributesListComponent;

  attributes: Attribute[];
  selected = new SelectionModel<Attribute>(true, []);
  saveSuccessMessage: string;
  showError = false;

  ngOnInit() {
    const unWanted = new Array<number>();
    this.data.notEmptyAttributes.forEach(attribute => {
      unWanted.push(attribute.id);
    });
    this.attributesService.getAttributeDefinitions(this.data.voId).subscribe(attributes => {
      this.attributes = attributes as Attribute[];
      this.attributes = this.attributes.filter(attribute => {
        return !unWanted.includes(attribute.id);
      });
      this.attributes = this.attributes.filter(attribute =>
        !attribute.namespace.includes('def:core')
      );
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave() {
    this.list.updateMapAttributes();
    let containsEmpty = false;
    for (const attribute of this.selected.selected) {
      if (attribute.type === 'java.util.ArrayList' && attribute.value.length === 0) {
        containsEmpty = true;
      }
      if (attribute.value === undefined) {
        containsEmpty = true;
      }
    }
    if (containsEmpty) {
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 5000);
      return;
    }
    this.attributesService.setVoAttributes(this.data.voId, this.selected.selected).subscribe(() => {
      this.notificator.showSuccess(this.saveSuccessMessage);
      this.selected.clear();
      this.dialogRef.close('saved');
    });
  }

}
