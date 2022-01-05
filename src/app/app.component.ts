import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post, PostDto } from './models/post';
import { addPost, deletePostItemSuccess, loadPosts } from './store/post/post.actions';
import { selectPostItems } from './store/post/post.selectors';
import { PostService } from './store/post/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoading = false;
  posts$: Observable<Post[]>;
  postForm: FormGroup;

  constructor(private store: Store<{ posts: Post[] }>,
    private postService: PostService,
    private formBuilder: FormBuilder) {

    this.posts$ = store.select(selectPostItems);
    // this.posts$ = this.store.select(state => state.posts);
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.postForm.controls; }

  createPost() {
    const post: PostDto = {
      title: this.f.title.value,
      author: this.f.author.value
    }

    this.postService.createPost(post).subscribe(
      res => {
        this.store.dispatch(addPost(res));
      }, err => {
      }
    )
  }

  deletePost(postId: any) {

    this.postService.deletePost(postId).subscribe(
      res => {
        console.log(res);
        this.store.dispatch(deletePostItemSuccess({postId: res.id}));
      }, err => {
      }
    )
  }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
    // this.postService.getAllPosts().subscribe(
    //   (posts: Post[]) =>
    // );
  }
}
