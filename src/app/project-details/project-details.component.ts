import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectDetailsService} from './services/project-details.service';
import {ProjectDetailsModel} from './models/project-details.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ReportModel} from './models/report.model';
import {MemberModel} from '../members/models/member.model';
import {SelectMemberModel} from '../projects/models/SelectMemberModel';
import {PostProjectModel} from '../projects/models/PostProjectModel';
import {ProjectModel} from '../projects/models/project.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: ProjectDetailsModel;
  projectId: number;
  membersList: SelectMemberModel[];
  leaderID: number;
  reportToEdit: ReportModel;
  projectToEdit: PostProjectModel;
  memberIdToAdd: number;
  projectModel: ProjectModel;

  constructor(private route: ActivatedRoute,
              private service: ProjectDetailsService,
              private modalService: NgbModal,
              private router: Router) {
  }

  ngOnInit() {
    this.reportToEdit = new ReportModel();
    this.membersList = [];
    this.projectToEdit = new PostProjectModel();
    this.projectModel = new ProjectModel();
    this.fetchProjectInfo().then(() => this.resolveMembersData());
  }

  resolveMembersData() {
    this.service.fetchMembersLists().then((list: MemberModel[]) => {
      this.membersList = this.mapMemberModels(list);
      this.leaderID = this.membersList.find((member) => this.project.currentLeader === member.fullName).id;
    });
  }

  mapMemberModels(list: MemberModel[]): SelectMemberModel[] {
    const listToReturn: SelectMemberModel[] = [];
    list.forEach(member => listToReturn.push(new SelectMemberModel(member)));
    return listToReturn;
  }

  fetchProjectInfo(): Promise<any> {
    this.projectId = Number(this.route.snapshot.params.id);
    return this.service.fetchProject(this.projectId)
      .then((project: ProjectDetailsModel) => {
        this.project = project;
        this.reportToEdit.author = project.currentLeader;
      });
  }

  onAddMemberToProject(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title3'});
  }

  addMemberToProject(content) {
    this.service.addMemberToProject(this.memberIdToAdd, this.project).then(() => this.fetchProjectInfo());
    content.close();
  }

  addProjectReport(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  editProject(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title1'});
  }

  saveReport(content) {
    this.service.saveReport(this.reportToEdit, this.projectId).then(() => this.fetchProjectInfo());
    content.close();
  }

  onReportDeleteEvent(reportId: number) {
    this.service.deleteReport(reportId).then(() => this.fetchProjectInfo());
  }

  onMemberDeleteEvent(memberId: number) {
    this.service.removeMember(this.project, memberId).then(() => this.fetchProjectInfo());
  }

  onDeleteProject(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title2'});
  }

  deleteProject(content) {
    this.service.deleteProject(this.projectId).then(() => this.router.navigate(['projects']));
    content.close();
  }

  archiveProject(content, content1) {
    this.projectModel.id = this.project.id;
    this.projectModel.name = this.project.name;
    this.projectModel.isArchived = true;
    console.log(this.projectModel);
    this.service.archiveProject(this.projectModel).then(() => this.fetchProjectInfo());
    content.close();
    this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title4'});
  }

  archiveProject1(content) {
    this.projectModel.id = this.project.id;
    this.projectModel.name = this.project.name;
    this.projectModel.isArchived = true;
    console.log(this.projectModel);
    this.service.archiveProject(this.projectModel).then(() => this.fetchProjectInfo());
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title4'});
  }

  updateProject(content) {
    this.projectToEdit.id = this.project.id;
    this.projectToEdit.name = this.project.name;
    this.projectToEdit.leaderId = this.leaderID;
    this.service.updateProject(this.projectToEdit).then(() => this.fetchProjectInfo());
    content.close();
  }
}
