import {Component, Input, OnInit} from '@angular/core';
import {ProjectModel} from '../models/ProjectModel';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
  @Input() project: ProjectModel;
  constructor() { }

  ngOnInit() {
  }

}
