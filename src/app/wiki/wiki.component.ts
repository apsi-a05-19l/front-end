import { Component, OnInit } from '@angular/core';
import {ProjectModel} from '../projects/models/project.model';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {
  /// WikiList: WikiModel[];

  constructor() { }

  ngOnInit() {
  }

}
