import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostsService} from "../../services/posts/posts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.sass']
})
export class JournalComponent implements OnInit {
  m_contactForm: FormGroup;
  postsArray: any;

  constructor(
    private m_formBuilder: FormBuilder,
    private m_postsService: PostsService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.m_contactForm = this.m_formBuilder.group({
      title: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
    this.getAllPosts()
  }

  /*
  * Get all the posts
   */
  getAllPosts(): void {
    this.m_postsService.getAll().subscribe((posts) => {
        this.postsArray = posts;
        },
        (err) => {
          console.log('error', err);
        }
      );
  }

  /*
  * Submit the forms
   */
  onSubmit(): void {
    this.m_postsService
      .createPost(
        this.title.value,
        this.message.value,
        []
      )
      .subscribe(
        (user) => {
          location.reload();
        },
        (err) => {
          console.log('error', err);
        }
      );
  }

  /*
  * Get message
   */
  get message() {
    return this.m_contactForm.get('message');
  }

  /*
  * Get title
   */
  get title() {
    return this.m_contactForm.get('title');
  }

  /*
  * Get specific post
   */
  getSpecificPost(post) {
    console.log(post)
  }
}
