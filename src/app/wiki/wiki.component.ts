import { Component, OnInit } from '@angular/core';
import {WikiModel} from './models/wiki.model';
import {WikiService} from './services/wiki.service';
import {WikiDetailsModel} from '../wiki-details/models/wiki-details.model';
import {MemberModel} from '../members/models/member.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {
  wikiList: WikiModel[];
  AuthorList: MemberModel[];
  wikiToEdit: WikiModel;
  AuthorID: number;
  constructor(private service: WikiService, private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.service.fetchWikiList().then((list: WikiModel[]) => this.wikiList = list);
    this.service.fetchAuthorLists().then((list: MemberModel[]) => this.AuthorList = list);
    this.wikiToEdit = new WikiModel();
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
