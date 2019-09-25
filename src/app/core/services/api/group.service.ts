import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Group} from '../../models/Group';
import {HttpParams} from '@angular/common/http';
import {Vo} from '../../models/Vo';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private apiService: ApiService
  ) { }

  getGroupById(id: number, showNotificationOnError = true): Observable<Group> {
    return this.apiService.get(`json/groupsManager/getGroupById?id=${id}`, new HttpParams(), showNotificationOnError);
  }

  getAllGroups(voId: number, showNotificationOnError = true): Observable<Group[]> {
    return this.apiService.get(`json/groupsManager/getAllGroups?vo=${voId}`, new HttpParams(), showNotificationOnError);
  }

  getAllSubGroups(groupId: number, showNotificationOnError = true): Observable<Group[]> {
    return this.apiService.get(`json/groupsManager/getSubGroups?parentGroup=${groupId}`, new HttpParams(), showNotificationOnError);
  }

  getSubGroups(groupId: number, showNotificationOnError = true): Observable<Group[]> {
    return this.apiService.get(`json/groupsManager/getSubGroups?parentGroup=${groupId}`, new HttpParams(), showNotificationOnError);
  }

  getAllRichSubGroupsWithAttributesByNames(groupId: number, showNotificationOnError = true): Observable<Group[]> {
    return this.apiService.get(`json/groupsManager/getAllRichSubGroupsWithAttributesByNames?group=${groupId}&attrNames=[]`,
      new HttpParams(), showNotificationOnError);
  }

  createGroup(voId: number, name: string, description: string, showNotificationOnError = true): Observable<Group> {
    return this.apiService.post('json/groupsManager/createGroup', {
      vo: voId,
      name: name,
      description: description
    }, showNotificationOnError);
  }

  createSubGroup(groupId: number, name: string, description: string, showNotificationOnError = true): Observable<Group> {
    return this.apiService.post('json/groupsManager/createGroup', {
      parentGroup: groupId,
      name: name,
      description: description
    }, showNotificationOnError);
  }

  getMemberGroups(memberId: number, showNotificationOnError = true): Observable<Group[]> {
    return this.apiService.get(`json/groupsManager/getMemberGroups?member=${memberId}`, new HttpParams(), showNotificationOnError);
  }

  deleteGroups(groups: Group[], showNotificationOnError = true) {
    return this.apiService.post('json/groupsManager/deleteGroups', {
      groups : groups.map( val => (val.id)),
      forceDelete : 1
    }, showNotificationOnError);
  }

  getAllMemberGroups(member: number, showNotificationOnError = true): Observable<Group[]> {
    return this.apiService.post('json/groupsManager/getAllMemberGroups', {
      'member': member
    }, showNotificationOnError);
  }

  moveGroup(movingGroupId: number, destinationGroupId?: number, showNotificationOnError = true): Observable<void> {
    return this.apiService.post('json/groupsManager/moveGroup', {
      'movingGroup' : movingGroupId,
      'destinationGroup' : destinationGroupId
    }, showNotificationOnError);
  }

  getVoOfGroup(id: number, showNotificationOnError = true): Observable<Vo> {
    return this.apiService.get(`json/groupsManager/getVo?group=${id}`, new HttpParams(), showNotificationOnError);
  }
}
