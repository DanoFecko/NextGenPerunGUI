import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {ResourcesService} from '../../../../core/services/api/resources.service';
import {SideMenuService} from '../../../../core/services/common/side-menu.service';
import {ActivatedRoute} from '@angular/router';
import {RichResource} from '../../../../core/models/RichResource';
import {SelectionModel} from '@angular/cdk/collections';
import {Facility} from '../../../../core/models/Facility';
import {FacilityService} from '../../../../core/services/api/facility.service';
import {MatDialog} from '@angular/material';
import {
  RemoveResourceDialogComponent} from '../../../../shared/components/dialogs/remove-resource-dialog/remove-resource-dialog.component';

@Component({
  selector: 'app-facility-resources',
  templateUrl: './facility-resources.component.html',
  styleUrls: ['./facility-resources.component.scss']
})
export class FacilityResourcesComponent implements OnInit {

  static id = 'FacilityResourcesComponent';

  // class used for animation
  @HostBinding('class.router-component') true;

  constructor(private dialog: MatDialog,
              private resourcesService: ResourcesService,
              private sideMenuService: SideMenuService,
              private facilityService: FacilityService,
              private route: ActivatedRoute) {
  }

  @Input()
  facility: Facility;
  resources: RichResource[] = [];
  selected = new SelectionModel<RichResource>(false, []);

  filterValue = '';

  loading: boolean;

  ngOnInit() {
    this.route.parent.params.subscribe(parentParams => {
      const facilityId = parentParams['facilityId'];

      this.facilityService.getFacilityById(facilityId).subscribe(facility => {
        this.facility = facility;

        this.refreshTable();
      });
    });
  }

  removeResource() {
    const dialogRef = this.dialog.open(RemoveResourceDialogComponent, {
      width: '450px',
      data: {facilityId: this.facility.id, resources: this.selected.selected}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refreshTable();
      }
    });
  }

  refreshTable() {
    this.loading = true;
    this.resourcesService.getAllResources(this.facility.id).subscribe(resources => {
      this.resources = resources;
      this.selected.clear();
      this.loading = false;
    });
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue;
  }
}
