import {Component, OnInit} from '@angular/core';
import {ProjectModel} from './models/project.model';
import {ProjectsService} from './services/projects.service';
import {MemberModel} from '../members/models/member.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {SelectMemberModel} from './models/SelectMemberModel';
import {PostProjectModel} from './models/PostProjectModel';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectsList: ProjectModel[];
  membersList: SelectMemberModel[];
  projectToEdit: PostProjectModel;

  constructor(private service: ProjectsService, private modalService: NgbModal, private router: Router) {
  }

  ngOnInit() {
    this.membersList = new Array<SelectMemberModel>();
    this.resolveProjectsData();
    this.service.fetchMembersLists().then((list: MemberModel[]) => list.forEach(member =>
      this.membersList.push(new SelectMemberModel(member)))
    );
    this.projectToEdit = new PostProjectModel();
  }

  resolveProjectsData() {
    this.service.fetchProjectsList().then((list: ProjectModel[]) => this.projectsList = list);
  }

  onAddProjectButtonClick(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  saveProject(content) {
    this.service.saveProject(this.projectToEdit).then(() => this.resolveProjectsData());
    content.close();
  }
}
