import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Group} from '../models/Group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private apiService: ApiService
  ) { }

  getGroupById(id: number): Observable<Group> {
    return this.apiService.get(`json/groupsManager/getGroupById?id=${id}`);
  }

  getAllGroups(voId: number): Observable<Group[]> {
    return this.apiService.get(`json/groupsManager/getAllGroups?vo=${voId}`);
  }

  getAllSubGroups(groupId: number): Observable<Group[]> {
    return this.apiService.get(`json/groupsManager/getSubGroups?parentGroup=${groupId}`);
  }

  getSubGroups(groupId: number): Observable<Group[]> {
    return this.apiService.get(`json/groupsManager/getSubGroups?parentGroup=${groupId}`);
  }

  getAllRichSubGroupsWithAttributesByNames(groupId: number): Observable<Group[]> {
    return this.apiService.get(`json/groupsManager/getAllRichSubGroupsWithAttributesByNames?group=${groupId}&attrNames=[]`);
  }

  createGroup(voId: number, name: string, description: string): Observable<Group> {
    return this.apiService.post('json/groupsManager/createGroup', {
      vo: voId,
      name: name,
      description: description
    });
  }

  createSubGroup(groupId: number, name: string, description: string): Observable<Group> {
    return this.apiService.post('json/groupsManager/createGroup', {
      parentGroup: groupId,
      name: name,
      description: description
    });
  }

  getMemberGroups(memberId: number): Observable<Group[]> {
    return this.apiService.get(`json/groupsManager/getMemberGroups?member=${memberId}`);
  }

  deleteGroups(groups: Group[]) {
    return this.apiService.post('json/groupsManager/deleteGroups', {
      groups : groups.map( val => (val.id)),
      forceDelete : 1
    });
  }
}
