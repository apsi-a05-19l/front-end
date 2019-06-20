import {Component, Input, OnInit} from '@angular/core';
import {ActivitiesModel} from '../models/activities.model';
import {MemberDetailsService} from '../services/members-details.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {
  @Input() list: ActivitiesModel[];
  activityToEdit: ActivitiesModel;
  image = '../../../assets/kosz.jpg';
  image1 = '../../../assets/pobrane.jpg';
  constructor(private service: MemberDetailsService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
  }

  clickOnBin(activityID: number) {
    this.service.deleteActivity(activityID).subscribe();
    this.router.navigate(['members']);
  }

  clickOnEdit(activity: ActivitiesModel, content) {
    this.activityToEdit = activity;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  updateActivity(content) {
    this.service.updateActivity(this.activityToEdit).then((activity) => console.log(activity));
    content.close();
  }

}
