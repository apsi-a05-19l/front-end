import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';
import {MemberModel} from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) { }

  fetchMembersLists(): Promise<any> {
    return this.http.get(serverAddress + '/members').toPromise();
  }

  saveMember(memberToSave: MemberModel): Promise<MemberModel> {
    return Promise.resolve(memberToSave);
  }

}
