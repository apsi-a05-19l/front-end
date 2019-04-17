import {Component, Input, OnInit} from '@angular/core';
import {ActivitiesModel} from '../models/activities.model';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {
  @Input() list: ActivitiesModel[];
  constructor() { }

  ngOnInit() {
  }

}
