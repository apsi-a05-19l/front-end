import { Component, OnInit } from '@angular/core';
import { MemberModel } from './models/member.model';
import { MembersService } from './services/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  membersList: MemberModel[];
  constructor(private service: MembersService) { }

  ngOnInit() {
    this.service.fetchMembersLists().then((list: MemberModel[]) => this.membersList = list);
  }

}
