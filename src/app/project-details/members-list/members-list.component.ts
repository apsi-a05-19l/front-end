import {Component, Input, OnInit} from '@angular/core';
import {SimpleMemberModel} from '../../member-details/models/simple-member.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {
  @Input() list: SimpleMemberModel[];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onMemberButtonClick(member: SimpleMemberModel) {
    this.router.navigate(['member/' + member.id]);
  }

}
