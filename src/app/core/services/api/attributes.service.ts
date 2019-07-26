import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Attribute} from '../../models/Attribute';
import {AttributeDefinition} from '../../models/AttributeDefinition';
import {Graph} from '../../models/Graph';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttributesService {

  constructor(
    private apiService: ApiService
  ) {
  }

  getMemberAttribute(memberId: number, urn: string, showNotificationOnError = true): Observable<Attribute> {
    return this.apiService.get(`json/attributesManager/getAttribute?member=${memberId}&attributeName=${urn}`,
      new HttpParams(), showNotificationOnError);
  }

  getVoAttribute(voId: number, urn: string, showNotificationOnError = true): Observable<Attribute> {
    return this.apiService.get(`json/attributesManager/getAttribute?vo=${voId}&attributeName=${urn}`,
      new HttpParams(), showNotificationOnError);
  }

  setVoAttribute(voId: number, attribute: Attribute, showNotificationOnError = true): Observable<void> {
    return this.apiService.post(`json/attributesManager/setAttribute`, {
      vo: voId,
      attribute: attribute
    }, showNotificationOnError);
  }

  getAttributeModulesDependenciesGraphText(format: string, showNotificationOnError = true): Observable<Graph> {
    return this.apiService.get(`json/attributesManager/getAttributeModulesDependenciesGraphText?format=${format}`,
      new HttpParams(), showNotificationOnError);
  }

  getAttributesDefinition(showNotificationOnError = true): Observable<AttributeDefinition[]> {
    return this.apiService.get('json/attributesManager/getAttributesDefinition',
      new HttpParams(), showNotificationOnError);
  }

  getAllVoAttributes(voId: number, showNotificationOnError = true): Observable<Attribute[]> {
    return this.apiService.get(`json/attributesManager/getAttributes?vo=${voId}`, new HttpParams(), showNotificationOnError);
  }

  deleteVoAttributes(voId: number, attributeIDs: number[], showNotificationOnError = true) {
    return this.apiService.post('json/attributesManager/removeAttributes', {
      vo: voId,
      attributes: attributeIDs
    }, showNotificationOnError);
  }

  getAttributeDefinitions(voId: number, showNotificationOnError = true): Observable<AttributeDefinition[]> {
    return this.apiService.get(`json/attributesManager/getAttributesDefinitionWithRights?vo=${voId}`,
      new HttpParams(), showNotificationOnError);
  }

  setVoAttributes(voId: number, attributes: Attribute[], showNotificationOnError = true): Observable<void> {
    return this.apiService.post(`json/attributesManager/setAttributes`, {
      vo: voId,
      attributes: attributes
    }, showNotificationOnError);
  }
}

