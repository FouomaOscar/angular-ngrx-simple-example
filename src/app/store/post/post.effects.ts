import { Injectable } from '@angular/core';
import { PostService } from './post.service';

// import * as PostActions from './post.actions';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, catchError, mergeMap } from "rxjs/operators";
import { EMPTY } from 'rxjs';
import * as PostActions from './post.actions';

@Injectable()
export class PostEffects {


  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType('[Post] Load Posts'),
    mergeMap(() => this.postService.getAllPosts()
      .pipe(
        map(posts => {
          console.log('test');
          return ({ type: '[Posts API] Posts Loaded Success', payload: posts });
        }),
        catchError(() => of({ type: '[Posts API] Posts Loaded Error' }))
      ))
  ));

  constructor(private actions$: Actions, private postService: PostService) {

  }

  // fetchPosts$ = createEffect(() =>
  //   this.actions$.pipe(
  //     // you can pass in multiple actions here that will trigger the same effect
  //     ofType(PostActions.appLoaded.type, PostActions.addPost),
  //     switchMap(() =>
  //       this.apiService.getAllPosts().pipe(
  //         map((mostItems) =>
  //           PostsActions.fetchPostSuccess({ mostItems: mostItems })
  //         ),
  //         catchError((error) =>
  //           of(PostsActions.fetchPostFailed({ error: error }))
  //         )
  //       )
  //     )
  //   )
  // );
}
