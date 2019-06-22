import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ReportModel} from '../models/report.model';
import {ProjectDetailsService} from '../services/project-details.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {
  @Input() list: ReportModel[];
  @Output() deleteEvent = new EventEmitter<number>();
  reportToEdit: ReportModel;
  image = '../../../../assets/kosz.jpg';
  image1 = '../../../../assets/pobrane.jpg';
  constructor(private service: ProjectDetailsService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
  }

  clickOnBin(reportID: number) {
    this.deleteEvent.emit(reportID);
  }

  clickOnEdit(report: ReportModel, content) {
    this.reportToEdit = report;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  updateReport(content) {
    this.service.updateReport(this.reportToEdit).then();
    content.close();
  }
}
