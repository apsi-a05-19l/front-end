import {Component, Input, OnInit} from '@angular/core';
import {ActivitiesModel} from '../models/activities.model';
import {MemberDetailsService} from '../services/members-details.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {
  @Input() list: ActivitiesModel[];
  image = '../../../../assets/kosz.jpg';
  constructor(private service: MemberDetailsService, private router: Router) { }

  ngOnInit() {
  }

  clickOnBin(activityID: number) {
    this.service.deleteActivity(activityID).subscribe();
    this.router.navigate(['members']);
  }

}
