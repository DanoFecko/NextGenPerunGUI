import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Application} from '../../models/Application';
import {ApplicationFormItemData} from '../../models/ApplicationFormItemData';
import {ApplicationForm} from '../../models/ApplicationForm';
import {ApplicationFormItem} from '../../models/ApplicationFormItem';
import {ApplicationMail} from '../../models/ApplicationMail';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private apiService: ApiService) { }

  sendInvitation(voId: number, name: string, email: string, language: string, showNotificationOnError = true): Observable<void> {
    return this.apiService.post('json/registrarManager/sendInvitation', {
      'voId': voId,
      'name': name,
      'email': email,
      'language': language}, showNotificationOnError);
  }

  sendInvitationToExistingUser(userId: number, voId: number, showNotificationOnError = true): Observable<void> {
    return this.apiService.post('json/registrarManager/sendInvitation', {
      voId: voId,
      userId: userId
    }, showNotificationOnError);
  }

  getApplicationsForVo(voId: number, showNotificationOnError = true): Observable<Application[]> {
    return this.apiService.post('json/registrarManager/getApplicationsForVo', {
      'vo': voId
    }, showNotificationOnError);
  }

  getApplicationsForVoWithState(voId: number, state: string[], showNotificationOnError = true): Observable<Application[]> {
    return this.apiService.post('json/registrarManager/getApplicationsForVo', {
      'vo': voId,
      'state': state
    }, showNotificationOnError);
  }

  getApplicationsForGroup(groupId: number, showNotificationOnError = true): Observable<Application[]> {
    return this.apiService.post('json/registrarManager/getApplicationsForGroup', {
      'group': groupId
    }, showNotificationOnError);
  }

  getApplicationsForGroupWithState(groupId: number, state: string[], showNotificationOnError = true): Observable<Application[]> {
    return this.apiService.post('json/registrarManager/getApplicationsForGroup', {
      'group': groupId,
      'state': state
    }, showNotificationOnError);
  }

  getApplicationById(applicationId: number, showNotificationOnError = true): Observable<Application> {
    return this.apiService.post('json/registrarManager/getApplicationById', {
      'id': applicationId
    }, showNotificationOnError);
  }

  getApplicationDataById(applicationId: number, showNotificationOnError = true): Observable<ApplicationFormItemData[]> {
    return this.apiService.post('json/registrarManager/getApplicationDataById', {
      'id': applicationId
    }, showNotificationOnError);
  }

  verifyApplication(applicationId: number, showNotificationOnError = true): Observable<Application> {
    return this.apiService.post('json/registrarManager/verifyApplication', {
      'id': applicationId
    }, showNotificationOnError);
  }

  approveApplication(applicationId: number, showNotificationOnError = true): Observable<Application> {
    return this.apiService.post('json/registrarManager/approveApplication', {
      'id': applicationId
    }, showNotificationOnError);
  }

  rejectApplication(applicationId: number, reason: string, showNotificationOnError = true): Observable<Application> {
    return this.apiService.post('json/registrarManager/rejectApplication', {
      'id': applicationId,
      'reason': reason
    }, showNotificationOnError);
  }

  deleteApplication(applicationId: number, showNotificationOnError = true): Observable<Application> {
    return this.apiService.post('json/registrarManager/deleteApplication', {
      'id': applicationId
    }, showNotificationOnError);
  }

  sendMessage(applicationId: number, mailType: string, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/sendMessage', {
      'appId': applicationId,
      'mailType': mailType
    }, showNotificationOnError);
  }

  sendMessageWithReason(applicationId: number, mailType: string, reason: string, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/sendMessage', {
      'appId': applicationId,
      'mailType': mailType,
      'reason': reason
    }, showNotificationOnError);
  }

  getApplicationFormForVo(voId: number, showNotificationOnError = true): Observable<ApplicationForm> {
    return this.apiService.post('json/registrarManager/getApplicationForm', {
      'vo': voId
    }, showNotificationOnError);
  }

  getApplicationFormForGroup(groupId: number, showNotificationOnError = true): Observable<ApplicationForm> {
    return this.apiService.post('json/registrarManager/getApplicationForm', {
      'group': groupId
    }, showNotificationOnError);
  }

  getFormItemsForVo(voId: number, showNotificationOnError = true): Observable<ApplicationFormItem[]> {
    return this.apiService.post('json/registrarManager/getFormItems', {
      'vo': voId
    }, showNotificationOnError);
  }

  updateFormItemsForVo(voId: number, items: ApplicationFormItem[], showNotificationOnError = true): Observable<number> {
    return this.apiService.post('json/registrarManager/updateFormItems', {
      'items': items,
      'vo': voId
    }, showNotificationOnError);
  }

  updateFormItemsForGroup(groupId: number, items: ApplicationFormItem[], showNotificationOnError = true): Observable<number> {
    return this.apiService.post('json/registrarManager/updateFormItems', {
      'items': items,
      'group': groupId
    }, showNotificationOnError);
  }

  updateForm(applicationItem: ApplicationForm, showNotificationOnError = true): Observable<ApplicationForm> {
    return this.apiService.post('json/registrarManager/updateForm', {
      'form': applicationItem
    }, showNotificationOnError);
  }

  copyFormFromVoToVo(fromVo: number, toVo: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/copyForm', {
      'fromVo': fromVo,
      'toVo': toVo
    }, showNotificationOnError);
  }

  copyFormFromGroupToVo(fromGroup: number, toVo: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/copyForm', {
      'fromGroup': fromGroup,
      'toVo': toVo
    }, showNotificationOnError);
  }

  getApplicationMailsForVo(vo: number, showNotificationOnError = true): Observable<ApplicationMail[]> {
    return this.apiService.post('json/registrarManager/getApplicationMails', {
      'vo': vo
    }, showNotificationOnError);
  }

  getApplicationMailsForGroup(group: number, showNotificationOnError = true): Observable<ApplicationMail[]> {
    return this.apiService.post('json/registrarManager/getApplicationMails', {
      'group': group
    }, showNotificationOnError);
  }

  setSendingEnabled(enabled: number, applicationMails: ApplicationMail[], showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/setSendingEnabled', {
      'enabled': enabled,
      'mails': applicationMails
    }, showNotificationOnError);
  }

  copyMailsFromGroupToVo(fromGroup: number, toVo: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/copyMails', {
      'fromGroup': fromGroup,
      'toVo': toVo
    }, showNotificationOnError);
  }

  copyMailsFromVoToVo(fromVo: number, toVo: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/copyMails', {
      'fromVo': fromVo,
      'toVo': toVo
    }, showNotificationOnError);
  }

  deleteApplicationMailForVo(vo: number, id: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/deleteApplicationMail', {
      'vo': vo,
      'id': id
    }, showNotificationOnError);
  }

  deleteApplicationMailForGroup(group: number, id: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/deleteApplicationMail', {
      'group': group,
      'id': id
    }, showNotificationOnError);
  }

  updateApplicationMail(mail: ApplicationMail, showNotificationOnError = true) {
    return this.apiService.post( 'json/registrarManager/updateApplicationMail', {
      'mail': mail
    }, showNotificationOnError);
  }

  addApplicationMailForVo(vo: number, mail: ApplicationMail, showNotificationOnError = true): Observable<ApplicationMail> {
    return this.apiService.post('json/registrarManager/addApplicationMail', {
      'vo': vo,
      'mail': mail
    }, showNotificationOnError);
  }

  addApplicationMailForGroup(group: number, mail: ApplicationMail, showNotificationOnError = true): Observable<ApplicationMail> {
    return this.apiService.post('json/registrarManager/addApplicationMail', {
      'group': group,
      'mail': mail
    }, showNotificationOnError);
  }

  copyFormFromGroupToGroup(fromGroup: number, toGroup: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/copyForm', {
      'fromGroup': fromGroup,
      'toGroup': toGroup
    }, showNotificationOnError);
  }

  copyFormFromVoToGroup(fromVo: number, toGroup: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/copyForm', {
      'fromVo': fromVo,
      'toGroup': toGroup
    }, showNotificationOnError);
  }

  copyMailsFromGroupToGroup(fromGroup: number, toGroup: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/copyMails', {
      'fromGroup': fromGroup,
      'toGroup': toGroup
    }, showNotificationOnError);
  }

  copyMailsFromVoToGroup(fromVo: number, toGroup: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/copyMails', {
      'fromVo': fromVo,
      'toGroup': toGroup
    }, showNotificationOnError);
  }

  getFormItemsForGroup(group: number, showNotificationOnError = true): Observable<ApplicationFormItem[]> {
    return this.apiService.post('json/registrarManager/getFormItems', {
      'group': group
    }, showNotificationOnError);
  }

  createApplicationForm(group: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/createApplicationForm', {
      'group': group
    }, showNotificationOnError);
  }
}
