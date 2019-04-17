import { Injectable } from '@angular/core';
import {MemberDetailsModel} from '../models/member-details.model';
import {mockMemberDetails} from '../mock-data/mock-member-details';


@Injectable({
  providedIn: 'root'
})
export class MemberDetailsService {

  constructor() { }

  fetchMember(memberId: number): Promise<MemberDetailsModel> {
    const memberToReturn: MemberDetailsModel = mockMemberDetails.filter(member => member.id === memberId)[0];
    return Promise.resolve(memberToReturn);
  }
}
