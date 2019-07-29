import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {RichDestination} from '../../models/RichDestination';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private apiService: ApiService
  ) { }

  getAllRichDestinations(facilityId: number, showNotificationOnError = true): Observable<RichDestination[]> {
    return this.apiService.post('json/servicesManager/getAllRichDestinations', {
      'facility': facilityId
    }, showNotificationOnError);
  }
}
