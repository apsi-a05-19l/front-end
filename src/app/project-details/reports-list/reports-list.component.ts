import {Component, Input, OnInit} from '@angular/core';
import {ReportModel} from '../models/report.model';
import {ProjectDetailsService} from '../services/project-details.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {
  @Input() list: ReportModel[];
  image = '../../../../assets/kosz.jpg';
  constructor(private service: ProjectDetailsService, private router: Router) { }

  ngOnInit() {
  }

  clickOnBin(reportID: number) {
    this.service.deleteReport(reportID).subscribe();
    this.router.navigate(['projects']);
  }
}
