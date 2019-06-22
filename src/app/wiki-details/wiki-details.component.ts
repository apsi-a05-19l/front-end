import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WikiDetailsService} from './services/wiki-details.service';
import {WikiDetailsModel} from './models/wiki-details.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TopicModel} from './models/topic.model';
import {MemberModel} from '../members/models/member.model';

@Component({
  selector: 'app-wiki-details',
  templateUrl: './wiki-details.component.html',
  styleUrls: ['./wiki-details.component.css']
})
export class WikiDetailsComponent implements OnInit {
  wiki: WikiDetailsModel;
  wikiId: number;
  topicsList: TopicModel[];
  authorsList: MemberModel[];

  constructor(private route: ActivatedRoute, private service: WikiDetailsService,
              private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.service.fetchAuthorLists().then((list: MemberModel[]) => this.authorsList = list);
    this.fetchWikiInfo(); }

  fetchWikiInfo() {
    this.wikiId = Number(this.route.snapshot.params.id);
    this.service.fetchWiki(this.wikiId)
      .then((wiki: WikiDetailsModel) => {
        this.wiki = wiki;
        this.wiki.Authors = wiki.Authors;
      });
  }

  addProjectTopic(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  editProject(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title1'});
  }

  // saveReport(content) {
  //   this.service.saveWiki(this.reportToEdit, this.projectId).then((report) => console.log(report));
  //   content.close();
  //   this.router.navigate(['projects']);
  // }

  deleteWiki() {
    this.service.deleteWiki(this.wikiId).subscribe();
    this.router.navigate(['wiki']);
  }

  // updateWiki(content) {
  //   this.service.updateWiki(this.wiki, this.authorID).then((wiki) => console.log(wiki));
  //   content.close();
  //   this.router.navigate(['']);
  // }
}
