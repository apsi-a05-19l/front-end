import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SimpleMemberModel} from '../../member-details/models/simple-member.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {
  @Input() list: SimpleMemberModel[];
  @Output() deleteEvent = new EventEmitter<number>();
  image = '../../../assets/kosz.jpg';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onMemberButtonClick(member: SimpleMemberModel) {
    this.router.navigate(['member/' + member.id]);
  }

  clickOnBin(activityID: number) {
    this.deleteEvent.emit(activityID);
  }

}
