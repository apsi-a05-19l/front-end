import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MemberDetailsService} from './services/members-details.service';
import {MemberDetailsModel} from './models/member-details.model';
import {ActivitiesModel} from './models/activities.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  member: MemberDetailsModel;
  memberID: number;
  activitiesToEdit: ActivitiesModel;
  constructor(private route: ActivatedRoute, private service: MemberDetailsService, private modalService: NgbModal) { }

  ngOnInit() {
    this.activitiesToEdit = new ActivitiesModel();
    this.fetchMemberInfo();
  }

  fetchMemberInfo() {
    this.memberID = Number(this.route.snapshot.params.id);
    this.service.fetchMember(this.memberID).then((member: MemberDetailsModel) => this.member = member);
  }

  addMemberActivity(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  saveActivity(content) {
    this.service.saveActivity(this.activitiesToEdit).then((activity) => console.log(activity));
    content.close();
  }

}
