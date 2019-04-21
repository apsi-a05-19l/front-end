import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectDetailsService} from './services/project-details.service';
import {ProjectDetailsModel} from './models/project-details.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: ProjectDetailsModel;
  projectId: number;
  constructor(private route: ActivatedRoute, private service: ProjectDetailsService, private modalService: NgbModal) { }

  ngOnInit() {
    this.fetchProjectInfo();
  }

  fetchProjectInfo() {
    this.projectId = Number(this.route.snapshot.params.id);
    this.service.fetchProject(this.projectId).then((project: ProjectDetailsModel) => this.project = project);
  }

  addProjectReport(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    console.log('add project report');
  }

}
