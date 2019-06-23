import {Component, Input, OnInit} from '@angular/core';
import {WikiModel} from '../models/wiki.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wiki-item',
  templateUrl: './wiki-item.component.html',
  styleUrls: ['./wiki-item.component.css']
})
export class WikiItemComponent implements OnInit {
  @Input() wiki: WikiModel;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onWikiButtonClick() {
    // this.router.navigate(['wiki/' + this.wiki.id]);
  }
}
