import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MemberDetailsService} from './services/members-details.service';
import {MemberDetailsModel} from './models/member-details.model';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  member: MemberDetailsModel;
  memberID: number;
  constructor(private route: ActivatedRoute, private service: MemberDetailsService) { }

  ngOnInit() {
    this.fetchMemberInfo();
  }

  fetchMemberInfo() {
    this.memberID = Number(this.route.snapshot.params.id);
    this.service.fetchMember(this.memberID).then((member: MemberDetailsModel) => this.member = member);
  }

}
