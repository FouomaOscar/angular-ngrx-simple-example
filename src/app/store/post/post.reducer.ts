import { Action, createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/post';
import * as PostActions from './post.actions';


export const postFeatureKey = 'post';

export interface PostState {
  posts: Post[]
}

export const initialState: PostState = {
  posts: []
};

export const postReducer = createReducer(
  initialState,
  on(PostActions.loadPosts,
    (state: PostState, { posts }) => ({ ...state, posts: posts })),
  on(PostActions.addPost,
    (state: PostState, { post }) => ({ ...state, posts: [...state.posts, post] })),
  on(PostActions.deletePostItemSuccess,
    (state, { postId }) => {
    const postItemIndex = state.posts.findIndex(
      (item) => item.id === postId
    );

    const updatedPostItems = [...state.posts];

    updatedPostItems.splice(postItemIndex, 1);
    return {
      ...state,
      posts: updatedPostItems,
    };
  })
);

export function reducer(state: PostState | undefined, action: Action): any {
  return postReducer(state, action);
}