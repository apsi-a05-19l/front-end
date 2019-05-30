import { Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import { MemberModel } from './models/member.model';
import { MembersService } from './services/members.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';
import { mockMembers } from './mock-data/mock-members';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})

export class MembersComponent implements OnInit {
  membersList: MemberModel[];
  myList: MemberModel[];
  memberToEdit: MemberModel;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  constructor(private service: MembersService, private modalService: NgbModal) { }

  ngOnInit() {
    this.service.fetchMembersLists().then((list: MemberModel[]) => this.membersList = list);
    this.memberToEdit = new MemberModel();
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    if (direction === '') {
      this.service.fetchMembersLists().then((list: MemberModel[]) => this.membersList = list);
    } else {
      this.service.fetchMembersLists().then((list: MemberModel[]) => this.myList = list);
      this.membersList = [...this.myList].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  onAddMemberButtonClick(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  saveMember(content) {
    this.service.saveMember(this.memberToEdit).then((member) => console.log(member));
    content.close();
  }
}


