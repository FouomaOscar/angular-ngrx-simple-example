import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/post';

export const loadPosts = createAction(
  '[Post] Load Posts',
  props<{ posts: Post[] }>()
);

export const addPost = createAction(
  '[Post] Add Post',
  (post: Post) => ({ post })
);

export const deletePostItemSuccess = createAction(
  '[Post] Delete Posts Success',
  props<{ postId: number }>()
);

export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{ data: any }>()
);

export const loadPostsFailure = createAction(
  '[Post] Load Posts Failure',
  props<{ error: any }>()
);
