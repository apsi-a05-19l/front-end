import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberDetailsService} from './services/members-details.service';
import {MemberDetailsModel} from './models/member-details.model';
import {ActivitiesModel} from './models/activities.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {OrganisationStatusModel} from './models/organisation-status.model';
import {PostMemberModel} from '../members/mock-data/post-member.model';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  organisationStatusList: OrganisationStatusModel[];
  member: MemberDetailsModel;
  memberID: number;
  activitiesToEdit: ActivitiesModel;
  memberToEdit: PostMemberModel;
  constructor(private route: ActivatedRoute,
              private service: MemberDetailsService,
              private modalService: NgbModal,
              private router: Router) {
  }

  ngOnInit() {
    this.activitiesToEdit = new ActivitiesModel();
    this.fetchMemberInfo();
  }

  fetchMemberInfo() {
    this.memberID = Number(this.route.snapshot.params.id);
    this.service.fetchMember(this.memberID).then((member: MemberDetailsModel) => this.member = member);
    this.service.fetchOrganisationStatuses().then((statuses: OrganisationStatusModel[]) => this.organisationStatusList = statuses);
    this.memberToEdit = new PostMemberModel();
  }

  addMemberActivity(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  editMember(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title1'});
  }

  saveActivity(content) {
    this.activitiesToEdit.id = null;
    this.service.saveActivity(this.activitiesToEdit, this.memberID).then(() => this.fetchMemberInfo());
    content.close();
  }

  onDeleteActivityEvent(activityId: number) {
    this.service.deleteActivity(activityId).then(() => this.fetchMemberInfo());
  }

  deleteMember() {
    this.service.deleteMember(this.memberID).then(() => this.router.navigate(['members']));
  }

  updateMember(content) {
    this.memberToEdit.id = this.member.id;
    this.memberToEdit.name = this.member.name;
    this.memberToEdit.surname = this.member.surname;
    this.memberToEdit.phone_number = this.member.phone_number;
    this.memberToEdit.email = this.member.email;
    this.memberToEdit.roleID = this.member.roleID;
    this.service.updateMember(this.memberToEdit).then((member) => console.log(member));
    content.close();
  }

}
