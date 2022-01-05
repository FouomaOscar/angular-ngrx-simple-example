import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './post.reducer';

export const selectPosts = createFeatureSelector<PostState>('posts');

export const selectPostItems = createSelector(
    selectPosts,
    (state: PostState) => state.posts
);
