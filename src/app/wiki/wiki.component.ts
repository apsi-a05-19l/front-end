import { Component, OnInit } from '@angular/core';
import {PostModel} from './models/PostModel';
import {WikiService} from './services/wiki.service';
import {MemberModel} from '../members/models/member.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {
  postList: PostModel[];
  AuthorList: MemberModel[];
  wikiToEdit: PostModel;
  constructor(private service: WikiService, private router: Router) { }

  ngOnInit() {
    this.service.fetchPostsList().then((list: PostModel[]) => this.postList = list);
    this.service.fetchAuthorLists().then((list: MemberModel[]) => this.AuthorList = list);
    this.wikiToEdit = new PostModel();
  }

  onAddWikiButtonClick() {
    this.router.navigate(['post-creation']);
  }
}
