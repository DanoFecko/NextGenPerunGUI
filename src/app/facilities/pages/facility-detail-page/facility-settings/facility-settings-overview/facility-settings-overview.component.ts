import {Component, HostBinding, OnInit} from '@angular/core';
import {MenuItem} from '../../../../../shared/models/MenuItem';
import {ActivatedRoute} from '@angular/router';
import {FacilityService} from '../../../../../core/services/api/facility.service';
import {Facility} from '../../../../../core/models/Facility';

@Component({
  selector: 'app-facility-settings-overview',
  templateUrl: './facility-settings-overview.component.html',
  styleUrls: ['./facility-settings-overview.component.scss']
})
export class FacilitySettingsOverviewComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor(
    private route: ActivatedRoute,
    private facilityService: FacilityService
  ) { }

  items: MenuItem[] = [];
  facility: Facility;

  ngOnInit() {
    this.route.parent.parent.params.subscribe(parentParams => {
      const facilityId = parentParams['facilityId'];

      this.facilityService.getFacilityById(facilityId).subscribe(facility => {
        this.facility = facility;

        this.initItems();
      });
    });
  }

  private initItems() {
    this.items = [
      {
        icon: 'attributes-white.svg',
        url: `/facilities/${this.facility.id}/settings/attributes`,
        label: 'MENU_ITEMS.FACILITY.ATTRIBUTES',
        style: 'facility-btn'
      }
    ];
  }
}
