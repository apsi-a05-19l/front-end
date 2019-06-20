import {MemberModel} from '../../members/models/member.model';

export class SelectMemberModel {
  id: number;
  fullName: string;

  constructor(member: MemberModel) {
    this.id = member.id;
    this.fullName = member.name + ' ' + member.surname;
  }
}
