import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as PostReducer from '../../store/post/post.reducer';
import { PostState } from '../../store/post/post.reducer';

export const coreFeatureKey = 'core';

export interface State {
  posts: PostState;
}

export const reducers: ActionReducerMap<State> = {
  posts: PostReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
