import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {RichMember} from '../../models/RichMember';
import {HttpParams} from '@angular/common/http';
import {Member} from '../../models/Member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(
    private apiService: ApiService
  ) {
  }

  findCompleteRichMembers(voId: number, searchString: string, attrsNames: string[], showNotificationOnError = true):
    Observable<RichMember[]> {
    return this.apiService.post('json/membersManager/findCompleteRichMembers',
      {
        'vo': voId,
        'searchString': searchString,
        'attrsNames': attrsNames,
        'allowedStatuses': ['VALID', 'INVALID', 'EXPIRED', 'DISABLED', 'SUSPENDED']
      }, showNotificationOnError);
  }

  getCompleteRichMembers(voId: number, attrsNames: string[], showNotificationOnError = true): Observable<RichMember[]> {
    return this.apiService.post(`json/membersManager/getCompleteRichMembers`,
      {
        'vo': voId,
        'attrsNames': attrsNames,
        'allowedStatuses': ['VALID', 'INVALID', 'SUSPENDED']
      }, showNotificationOnError);
  }

  getRichMemberWithAttributes(memberId: number, showNotificationOnError = true): Observable<RichMember> {
    return this.apiService.get(`json/membersManager/getRichMemberWithAttributes?id=${memberId}`,
      new HttpParams(), showNotificationOnError);
  }

  findCompleteRichMembersForGroup(groupId: number, searchString: string, attrsNames: string[], showNotificationOnError = true):
    Observable<RichMember[]> {

    return this.apiService.post('json/membersManager/findCompleteRichMembers', {
      'group': groupId,
      'attrsNames': attrsNames,
      'allowedStatuses': ['INVALID', 'SUSPENDED', 'EXPIRED', 'VALID', 'DISABLED'],
      'searchString': searchString,
      'lookingInParentGroup': false
    }, showNotificationOnError);
  }

  getCompleteRichMembersForGroup(groupId: number, attrNames: string[], showNotificationOnError = true): Observable<RichMember[]> {
    return this.apiService.post('json/membersManager/getCompleteRichMembers', {
      'group': groupId,
      'attrsNames': attrNames,
      'allowedStatuses': ['INVALID', 'SUSPENDED', 'VALID'],
      'lookingInParentGroup': false
    }, showNotificationOnError);
  }

  deleteMembers(memberIds: number[], showNotificationOnError = true): Observable<void> {
    return this.apiService.post('json/membersManager/deleteMembers', {
      'members': memberIds
    }, showNotificationOnError);
  }

  getMembersByUser(user: number, showNotificationOnError = true): Observable<Member[]> {
    return this.apiService.post('json/membersManager/getMembersByUser', {
      'user': user
    }, showNotificationOnError);
  }
}
