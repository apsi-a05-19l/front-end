import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  constructor(private route: ActivatedRoute, private service: MemberDetailsService, private modalService: NgbModal, private router: Router) { }

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

  editMember(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title1'});
  }

  saveActivity(content) {
    this.activitiesToEdit.id = null;
    this.service.saveActivity(this.activitiesToEdit, this.memberID).then((activity) => console.log(activity));
    content.close();
    this.router.navigate(['members']);
  }

  deleteMember() {
    if (this.member.activities != null) {
      for (const activity of this.member.activities) {
        this.service.deleteActivity(activity.id).subscribe();
      }
    }
    this.service.deleteMember(this.memberID).subscribe();
    this.router.navigate(['members']);
  }

  updateMember(content) {
    this.service.updateMember(this.member).then((member) => console.log(member));
    content.close();
  }

}
