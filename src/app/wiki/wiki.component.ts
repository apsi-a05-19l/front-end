import { Component, OnInit } from '@angular/core';
import {PostModel} from './models/postModel';
import {WikiService} from './services/wiki.service';
import {MemberModel} from '../members/models/member.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
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
  AuthorID: number;
  constructor(private service: WikiService, private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.service.fetchPostsList().then((list: PostModel[]) => this.postList = list);
    this.service.fetchAuthorLists().then((list: MemberModel[]) => this.AuthorList = list);
    this.wikiToEdit = new PostModel();
  }

  onAddWikiButtonClick(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  changeAuthorID(ID: number) {
    this.AuthorID = Number(ID);
  }

  saveWiki(content) {
    // this.service.saveWiki(this.wikiToEdit, this.AuthorID).then((wiki) => console.log(wiki));
    // content.close();
    // this.router.navigate(['']);
  }
}
