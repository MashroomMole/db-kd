import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SEARCH_FEATURE_KEY, SearchState} from './state';

export const selectSearchState = createFeatureSelector<SearchState>(SEARCH_FEATURE_KEY);
export const selectResResult = createSelector(selectSearchState, state => state.resultRes);
export const selectReqResult = createSelector(selectSearchState, state => state.resultReq);


export const selectSearchLoading = createSelector(selectSearchState, state => state.loading);


