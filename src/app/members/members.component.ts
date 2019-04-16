import { Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import { MemberModel } from './models/member.model';
import { MembersService } from './services/members.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';
import { mockMembers } from './mock-data/mock-members';

export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})

export class MembersComponent implements OnInit {
  membersList: MemberModel[];
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  constructor(private service: MembersService) { }

  ngOnInit() {
    this.service.fetchMembersLists().then((list: MemberModel[]) => this.membersList = list);
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    if (direction === '') {
      this.membersList = mockMembers;
    } else {
      this.membersList = [...mockMembers].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }
}


