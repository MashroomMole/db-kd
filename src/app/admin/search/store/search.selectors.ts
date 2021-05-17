import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SEARCH_FEATURE_KEY, SearchState} from './state';

export const selectSearchState = createFeatureSelector<SearchState>(SEARCH_FEATURE_KEY);
export const selectResult = createSelector(selectSearchState, state => state.result);

export const selectSearchLoading = createSelector(selectSearchState, state => state.loading);


