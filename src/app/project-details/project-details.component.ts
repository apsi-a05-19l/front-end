import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectDetailsService} from './services/project-details.service';
import {ProjectDetailsModel} from './models/project-details.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ReportModel} from './models/report.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: ProjectDetailsModel;
  projectId: number;
  reportToEdit: ReportModel;

  constructor(private route: ActivatedRoute, private service: ProjectDetailsService, private modalService: NgbModal) { }

  ngOnInit() {
    this.reportToEdit = new ReportModel();
    this.fetchProjectInfo();
  }

  fetchProjectInfo() {
    this.projectId = Number(this.route.snapshot.params.id);
    this.service.fetchProject(this.projectId)
      .then((project: ProjectDetailsModel) => {
        this.project = project;
        this.reportToEdit.author = project.currentLeader;
      });
  }

  addProjectReport(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  saveReport(content) {
    this.service.saveReport(this.reportToEdit).then((report) => console.log(report));
    content.close();
  }

}
