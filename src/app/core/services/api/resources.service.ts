import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RichResource} from '../../models/RichResource';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(
    private apiService: ApiService
  ) {
  }

  getResourcesByVo(id: number): Observable<RichResource[]> {
    return this.apiService.get(`json/resourcesManager/getRichResources?vo=${id}`);
  }

  getResourcesByGroup(id: number): Observable<RichResource[]> {
    return this.apiService.get(`json/resourcesManager/getAssignedRichResources?group=${id}`);
  }
}
