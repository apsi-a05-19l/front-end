import { Injectable } from '@angular/core';
import {ActivitiesModel} from '../models/activities.model';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';
import {MemberModel} from '../../members/models/member.model';


@Injectable({
  providedIn: 'root'
})
export class MemberDetailsService {

  constructor(private http: HttpClient) { }

  fetchMember(memberId: number): Promise<any> {
    return this.http.get(serverAddress + '/members/' + memberId).toPromise();
  }

  saveActivity(activityToSave: ActivitiesModel) {
    this.http.post(serverAddress + '/activity/' + activityToSave.id, activityToSave);
  }

  deleteMember(memberID: number) {
    this.http.delete(serverAddress + '/members/' + memberID);
  }
}
