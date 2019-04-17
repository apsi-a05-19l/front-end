import { Component, Input, OnInit } from '@angular/core';
import {MemberModel} from '../models/member.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-members-item',
  templateUrl: './members-item.component.html',
  styleUrls: ['./members-item.component.css']
})
export class MembersItemComponent implements OnInit {
  @Input() member: MemberModel;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onMemberButtonClick() {
    this.router.navigate(['member/' + this.member.id]);
  }
}

