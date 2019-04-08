import { Component, OnInit } from '@angular/core';
import {ProjectModel} from './models/project.model';
import {ProjectsService} from './services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectsList: ProjectModel[];
  constructor(private service: ProjectsService) { }

  ngOnInit() {
    this.service.fetchProjectsList().then((list: ProjectModel[]) => this.projectsList = list);
  }

}
