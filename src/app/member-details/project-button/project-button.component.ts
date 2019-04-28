import {Component, Input, OnInit} from '@angular/core';
import {ProjectModel} from '../../projects/models/project.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-button',
  templateUrl: './project-button.component.html',
  styleUrls: ['./project-button.component.css']
})
export class ProjectButtonComponent implements OnInit {
  @Input() project: ProjectModel;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onProjectButtonClicked() {
    this.router.navigate(['project/' + this.project.id]);
  }
}
