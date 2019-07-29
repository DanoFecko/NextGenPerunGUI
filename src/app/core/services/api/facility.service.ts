import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Facility} from '../../models/Facility';
import {Resource} from '../../models/Resource';
import {Group} from '../../models/Group';
import {RichFacility} from '../../models/RichFacility';
import {Vo} from '../../models/Vo';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(
    private apiService: ApiService
  ) { }

  getFacilityById(id: number, showNotificationOnError = true): Observable<Facility> {
    return this.apiService.post('json/facilitiesManager/getFacilityById', {
      'id': id
    }, showNotificationOnError);
  }

  getFacilitiesByDestination(destination: string, showNotificationOnError = true): Observable<Facility[]> {
    return this.apiService.post('json/facilitiesManager/getFacilitiesByDestination', {
      'destination': destination
    }, showNotificationOnError);
  }

  getAssignedResources(facility: number, showNotificationOnError = true): Observable<Resource[]> {
    return this.apiService.post('json/facilitiesManager/getAssignedResources', {
      'facility': facility
    }, showNotificationOnError);
  }

  getAllowedGroups(facility: number, vo: number, showNotificationOnError = true): Observable<Group[]> {
    return this.apiService.post('json/facilitiesManager/getAllowedGroups', {
      'facility': facility,
      'vo': vo
    }, showNotificationOnError);
  }

  getFacilities(showNotificationOnError = true): Observable<Facility[]> {
    return this.apiService.get('json/facilitiesManager/getFacilities', new HttpParams(), showNotificationOnError);
  }

  getRichFacilities(showNotificationOnError = true): Observable<RichFacility[]> {
    return this.apiService.get('json/facilitiesManager/getRichFacilities', new HttpParams(), showNotificationOnError);
  }

  getAllowedVos(facility: number, showNotificationOnError = true): Observable<Vo[]> {
    return this.apiService.post('json/facilitiesManager/getAllowedVos', {
      'facility': facility
    }, showNotificationOnError);
  }
}
