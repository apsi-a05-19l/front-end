import { Component, OnInit } from '@angular/core';
import {PostModel} from '../wiki/models/PostModel';
import {MemberModel} from '../members/models/member.model';
import {MembersService} from '../members/services/members.service';
import {SelectMemberModel} from '../projects/models/SelectMemberModel';
import {WikiService} from '../wiki/services/wiki.service';
import {PartModel} from '../wiki/models/PartModel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-creation',
  templateUrl: './post-creation.component.html',
  styleUrls: ['./post-creation.component.css']
})
export class PostCreationComponent implements OnInit {
  editedPost: PostModel;
  membersList: SelectMemberModel[];
  membersfetched = false;
  topicList = [];
  constructor(private membersService: MembersService, private service: WikiService, private router: Router) { }

  ngOnInit() {
    this.editedPost = new PostModel();
    this.membersList = [];
    this.membersService.fetchMembersLists().then((list: MemberModel[]) => list.forEach(member =>
      this.membersList.push(new SelectMemberModel(member)))
    ).then(() => this.membersfetched = true);
    this.service.fetchTopicsList().then((list: string[]) => this.topicList = list);
  }

  addPart() {
    this.editedPost.parts.push(new PartModel());
  }

  removeLastPart() {
    this.editedPost.parts.pop();
  }

  savePost() {
    this.service.saveWiki(this.editedPost).then(() => this.router.navigate(['/wiki']));
  }
}
