import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectDetailsService} from './services/project-details.service';
import {ProjectDetailsModel} from './models/project-details.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ReportModel} from './models/report.model';
import {MemberModel} from '../members/models/member.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: ProjectDetailsModel;
  projectId: number;
  membersList: MemberModel[];
  leaderID: number;
  reportToEdit: ReportModel;
  memberIdToAdd: number;

  constructor(private route: ActivatedRoute, private service: ProjectDetailsService, private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.reportToEdit = new ReportModel();
    this.service.fetchMembersLists().then((list: MemberModel[]) => this.membersList = list);
    this.fetchProjectInfo();
    this.leaderID = this.membersList.filter((member) => this.project.currentLeader === (member.name + ' ' + member.surname))[0].id;
  }

  fetchProjectInfo() {
    this.projectId = Number(this.route.snapshot.params.id);
    this.service.fetchProject(this.projectId)
      .then((project: ProjectDetailsModel) => {
        this.project = project;
        this.reportToEdit.author = project.currentLeader;
      });
  }

  onAddMemberToProject(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title2'});
  }

  addMemberToProject(content) {
    this.service.addMemberToProject(this.memberIdToAdd).then((member) => console.log(member));
    content.close();
  }

  changeMemberID(ID: number) {
    this.memberIdToAdd = Number(ID);
  }

  addProjectReport(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  editProject(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title1'});
  }

  saveReport(content) {
    this.service.saveReport(this.reportToEdit, this.projectId).then((report) => console.log(report));
    content.close();
    this.router.navigate(['projects']);
  }

  deleteProject() {
    if (this.project.reports != null) {
      for (const report of this.project.reports) {
        this.service.deleteReport(report.id).subscribe();
      }
    }
    this.service.deleteProject(this.projectId).subscribe();
    this.router.navigate(['projects']);
  }

  changeLeaderID(ID: number) {
    this.leaderID = Number(ID);
  }

  updateProject(content) {
    this.service.updateProject(this.project, this.leaderID).then((project) => console.log(project));
    content.close();
    this.router.navigate(['']);
  }
}
