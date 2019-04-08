import {Component, Input, OnInit} from '@angular/core';
import {ProjectModel} from '../models/project.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
  @Input() project: ProjectModel;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onProjectButtonClick() {
    this.router.navigate(['project/' + this.project.id]);
  }
}
