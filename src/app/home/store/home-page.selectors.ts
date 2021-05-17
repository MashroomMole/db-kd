import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HOME_PAGE_FEATURE_KEY, HomePageState } from './state';

export const selectHomePageState = createFeatureSelector<HomePageState>(HOME_PAGE_FEATURE_KEY);
export const selectRequests = createSelector(selectHomePageState, state => state.requests);
export const selectRequestsLoading = createSelector(selectHomePageState, state => state.loading);

export const selectReservations = createSelector(selectHomePageState, state => state.reservations);




