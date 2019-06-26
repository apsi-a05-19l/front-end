import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../models/PostModel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: PostModel;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onWikiButtonClick() {
     this.router.navigate(['wiki/' + this.post.id]);
  }
}

