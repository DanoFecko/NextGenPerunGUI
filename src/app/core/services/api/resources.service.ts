import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RichResource} from '../../models/RichResource';
import {ApiService} from './api.service';
import {HttpParams} from '@angular/common/http';
import {Resource} from '../../models/Resource';
import {Service} from '../../models/Service';
import {ResourceTag} from '../../models/ResourceTag';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(
    private apiService: ApiService
  ) {
  }

  getResourceById(id: number, showNotificationOnError = true): Observable<Resource> {
    return this.apiService.post('json/resourcesManager/getResourceById', {
      id: id
    }, showNotificationOnError);
  }

  getResourcesByVo(id: number, showNotificationOnError = true): Observable<RichResource[]> {
    return this.apiService.get(`json/resourcesManager/getRichResources?vo=${id}`, new HttpParams(), showNotificationOnError);
  }

  getResourcesByGroup(id: number, showNotificationOnError = true): Observable<RichResource[]> {
    return this.apiService.get(`json/resourcesManager/getAssignedRichResources?group=${id}`, new HttpParams(), showNotificationOnError);
  }

  getAssignedResources(group: number, showNotificationOnError = true): Observable<Resource[]> {
    return this.apiService.post('json/resourcesManager/getAssignedResources', {
      'group': group
    }, showNotificationOnError);
  }

  getAssignedServices(resource: number, showNotificationOnError = true): Observable<Service[]> {
    return this.apiService.post('json/resourcesManager/getAssignedServices', {
      'resource': resource
    }, showNotificationOnError);
  }

  getAllResources(facilityId: number, showNotificationOnError = true): Observable<RichResource[]> {
    return this.apiService
      .get(`json/facilitiesManager/getAssignedRichResources?facility=${facilityId}`, new HttpParams(), showNotificationOnError);
  }

  removeResource(resourceId: number, showNotificationOnError = true) {
    return this.apiService.post('json/resourcesManager/deleteResource', {
      resource : resourceId,
      forceDelete : 1
    }, showNotificationOnError);
  }

  getAllResourcesTagsForVo(voId: number, showNotificationOnError = true): Observable<ResourceTag[]> {
    return this.apiService.post('json/resourcesManager/getAllResourcesTagsForVo', {
      'vo': voId
    }, showNotificationOnError);
  }

  updateResourceTag(resourceTag: ResourceTag, showNotificationOnError = true): Observable<ResourceTag> {
    return this.apiService.post('json/resourcesManager/updateResourceTag', {
      'resourceTag': resourceTag
    }, showNotificationOnError);
  }

  createResourceTag(tagName: string, vo: number, showNotificationOnError = true): Observable<ResourceTag> {
    return this.apiService.post('json/resourcesManager/createResourceTag', {
      'tagName': tagName,
      'vo': vo
    }, showNotificationOnError);
  }

  deleteResourceTag(resourceTag: ResourceTag, showNotificationOnError = true) {
    return this.apiService.post('json/resourcesManager/deleteResourceTag', {
      'resourceTag': resourceTag
    }, showNotificationOnError);
  }
}
