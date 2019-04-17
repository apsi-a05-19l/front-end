import { Injectable } from '@angular/core';
import { MemberModel } from '../models/member.model';
import { mockMembers } from '../mock-data/mock-members';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor() { }

  fetchMembersLists(): Promise<MemberModel[]> {
    return Promise.resolve(mockMembers);
  }


}
