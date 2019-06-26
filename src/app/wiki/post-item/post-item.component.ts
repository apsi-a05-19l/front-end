import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../models/postModel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wiki-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() wiki: PostModel;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onWikiButtonClick() {
    // this.router.navigate(['wiki/' + this.wiki.id]);
  }
}

