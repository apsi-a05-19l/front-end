import { Component, OnInit } from '@angular/core';
import {ProjectModel} from './models/project.model';
import {ProjectsService} from './services/projects.service';
import {ProjectDetailsModel} from '../project-details/models/project-details.model';
import {MemberModel} from '../members/models/member.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectsList: ProjectModel[];
  membersList: MemberModel[];
  projectToEdit: ProjectModel;
  leaderID: number;
  constructor(private service: ProjectsService, private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.service.fetchProjectsList().then((list: ProjectModel[]) => this.projectsList = list);
    this.service.fetchMembersLists().then((list: MemberModel[]) => this.membersList = list);
    this.projectToEdit = new ProjectModel();
  }

  onAddProjectButtonClick(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  changeLeaderID(ID: number) {
    this.leaderID = Number(ID);
  }

  saveProject(content) {
    this.service.saveProject(this.projectToEdit, this.leaderID).then((project) => console.log(project));
    content.close();
    this.router.navigate(['']);
  }
}
