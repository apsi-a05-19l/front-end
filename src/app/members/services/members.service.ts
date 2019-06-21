import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';
import {PostMemberModel} from '../mock-data/post-member.model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) { }

  fetchMembersLists(): Promise<any> {
    return this.http.get(serverAddress + '/members').toPromise();
  }

  saveMember(memberToSave: PostMemberModel): Promise<any> {
    return this.http.post(serverAddress + '/members', memberToSave).toPromise();
  }

  fetchOrganisationStatuses(): Promise<any> {
    return this.http.get(serverAddress + '/role').toPromise();
  }

}
