import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Application} from '../models/Application';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private apiService: ApiService) { }

  sendInvitation(voId: number, name: string, email: string, language: string ): Observable<void> {
    return this.apiService.post('json/registrarManager/sendInvitation', {
      'voId': voId,
      'name': name,
      'email': email,
      'language': language});
  }

  getApplicationsForVo(voId: number): Observable<Application[]> {
    return this.apiService.post('json/registrarManager/getApplicationsForVo', {
      'vo': voId
    });
  }

  getApplicationsForVoWithState(voId: number, state: string[]): Observable<Application[]> {
    return this.apiService.post('json/registrarManager/getApplicationsForVo', {
      'vo': voId,
      'state': state
    });
  }

  getApplicationsForGroup(groupId: number): Observable<Application[]> {
    return this.apiService.post('json/registrarManager/getApplicationsForGroup', {
      'group': groupId
    });
  }

  getApplicationsForGroupWithState(groupId: number, state: string[]): Observable<Application[]> {
    return this.apiService.post('json/registrarManager/getApplicationsForGroup', {
      'group': groupId,
      'state': state
    });
  }
}
