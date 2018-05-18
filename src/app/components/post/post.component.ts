import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private router: ActivatedRoute,
    private postService: PostService,
    private LocatioN: Location
  ) { }

  ngOnInit() {
    const id = +this.router.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe(post => this.post = post)
  }

}
