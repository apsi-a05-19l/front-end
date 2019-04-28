import { Component, Input, OnInit } from '@angular/core';
import {ProjectModel} from '../../projects/models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input() list: ProjectModel[];
  constructor() { }

  ngOnInit() {
  }

}
