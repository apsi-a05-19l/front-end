import {Component, Input, OnInit} from '@angular/core';
import {ReportModel} from '../models/report.model';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {
  @Input() list: ReportModel[];
  constructor() { }

  ngOnInit() {
  }

}
