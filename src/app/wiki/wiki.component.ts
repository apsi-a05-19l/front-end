import { Component, OnInit } from '@angular/core';
import {WikiModel} from './models/wiki.model';
import {WikiService} from './services/wiki.service';
import {WikiDetailsModel} from '../wiki-details/models/wiki-details.model';
import {MemberModel} from '../members/models/member.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {ProjectModel} from '../projects/models/project.model';
import {TopicModel} from '../wiki-details/models/topic.model';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {
  wikiList: WikiModel[];
  AuthorList: MemberModel[];
  wikiToEdit: WikiModel;
  TopicList: TopicModel[];
  AuthorID: number;
  post_topic: string;

  constructor(private service: WikiService, private modalService: NgbModal, private router: Router) {
  }

  ngOnInit() {
    this.service.fetchWikiList().then((list: WikiModel[]) => this.wikiList = list);
    this.service.fetchTopicList().then((list: TopicModel[]) => this.TopicList = list);
    this.service.fetchAuthorLists().then((list: MemberModel[]) => this.AuthorList = list);
    this.wikiToEdit = new WikiModel();
  }

  resolveWikiData() {
    this.service.fetchWikiList().then((list: WikiModel[]) => this.wikiList = list);
  }

  onAddWikiButtonClick(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  changeAuthorID(ID: number) {
    this.AuthorID = Number(ID);
  }

  changeTopic(topic: string) {
    this.post_topic = topic;
  }

  saveWiki(content) {
    this.service.saveWiki(this.wikiToEdit).then(() => this.resolveWikiData());
    content.close();
  }
}
