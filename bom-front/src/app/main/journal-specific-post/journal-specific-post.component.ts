import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../services/posts/posts.service";

@Component({
  selector: 'app-journal-specific-post',
  templateUrl: './journal-specific-post.component.html',
  styleUrls: ['./journal-specific-post.component.sass']
})
export class JournalSpecificPostComponent implements OnInit {
  id: any;
  posts: any;

  constructor(
    private route: ActivatedRoute,
    private _postService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.id = res.id;
      console.log(res.id);
      this._postService.getPost(this.id).subscribe(
        (posts) => {
          this.posts = posts;
        },
        (err) => {
          console.log('An error occured while fetching journal post', err);
        }
      );
    });
  }
}
