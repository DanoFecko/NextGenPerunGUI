import {SideMenuService} from '../../../../../core/services/common/side-menu.service';
import {VoService} from '../../../../../core/services/api/vo.service';
import {ActivatedRoute} from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
import {Attribute} from '../../../../../core/models/Attribute';
import {AttributesService} from '../../../../../core/services/api/attributes.service';
// tslint:disable-next-line:max-line-length
import {DeleteAttributeDialogComponent} from '../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component';
import {MatDialog} from '@angular/material';
// tslint:disable-next-line:max-line-length
import {CreateAttributeDialogComponent} from '../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component';
import {Component, HostBinding, OnInit, ViewChild} from '@angular/core';
import {AttributesListComponent} from '../../../../../shared/components/attributes-list/attributes-list.component';
import {NotificatorService} from '../../../../../core/services/common/notificator.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-vo-settings-attributes',
  templateUrl: './vo-settings-attributes.component.html',
  styleUrls: ['./vo-settings-attributes.component.scss']
})
export class VoSettingsAttributesComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor(private attributesService: AttributesService,
              private sideMenuService: SideMenuService,
              private voService: VoService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private notificator: NotificatorService,
              private translate: TranslateService) {
    this.translate.get('VO_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE').subscribe(value => this.saveSuccessMessage = value);
    this.translate.get('VO_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE').subscribe(value => this.deleteSuccessMessage = value);
  }

  @ViewChild('list', {static: false})
  list: AttributesListComponent;

  attributes: Attribute[] = [];
  selected = new SelectionModel<Attribute>(true, []);
  voId: number;
  saveSuccessMessage: string;
  deleteSuccessMessage: string;

  ngOnInit() {
    this.route.parent.parent.params.subscribe(parentParams => {
      this.voId = parentParams['voId'];
      this.attributesService.getAllVoAttributes(this.voId).subscribe(attributes => {
        this.attributes = attributes.filter(attribute =>
          !attribute.namespace.includes('def:core')
        );
      });
    });
  }

  onDelete() {
    const dialogRef = this.dialog.open(DeleteAttributeDialogComponent, {
      width: '450px',
      data: {voId: this.voId, attributes: this.selected.selected}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.attributesService.getAllVoAttributes(this.voId).subscribe(attributes => {
          this.attributes = attributes.filter(attribute =>
            !attribute.namespace.includes('def:core')
          );
          this.selected.clear();
        });
      }
    });
  }

  onCreate() {
    const dialogRef = this.dialog.open(CreateAttributeDialogComponent, {
      width: '1050px',
      data: {voId: this.voId, notEmptyAttributes: this.attributes, style: 'vo-theme'}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.ngOnInit();
      }
    });
  }

  onSave() {
    // have to use this to update attribute with map in it, before saving it
    this.list.updateMapAttributes();
    this.attributesService.setVoAttributes(this.voId, this.selected.selected).subscribe(() => {
      this.attributesService.getAllVoAttributes(this.voId).subscribe(attributes => {
        this.attributes = attributes.filter(attribute =>
          !attribute.namespace.includes('def:core')
        );
        this.notificator.showSuccess(this.saveSuccessMessage);
        this.selected.clear();
      });
    });
  }
}
