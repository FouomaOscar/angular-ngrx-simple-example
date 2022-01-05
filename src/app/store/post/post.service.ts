import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostDto } from 'src/app/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/posts');
  }

  createPost(post: PostDto): Observable<Post> {
    return this.http.post<Post>('/posts', post);
  }

  deletePost(postId: number): Observable<Post> {
    return this.http.delete<Post>('/posts/' + postId);
  } 
}
