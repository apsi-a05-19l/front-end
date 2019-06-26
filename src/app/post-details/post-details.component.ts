import {Component, OnInit} from '@angular/core';
import {PostModel} from '../wiki/models/PostModel';
import {WikiService} from '../wiki/services/wiki.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: PostModel;
  postId: number;

  constructor(private service: WikiService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.postId = Number(this.route.snapshot.params.id);
    this.service.fetchPostElement(this.postId).then(element => this.post = element);
  }

  deletePost() {
    this.service.deletePost(this.post.id).then(() => this.router.navigate(['/wiki']));
  }
}
