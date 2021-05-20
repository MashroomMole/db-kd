import {createAction, props} from '@ngrx/store';
import {RequestModel, ReservationModel, SearchModel} from '../../../shared/model/model';

export enum SearchActions {
  searchReservations = '[Search] search reservations',
  searchReservationsSuccess = '[Search] search reservations success',
  searchReservationsFailure = '[Search] search reservations failure',
  searchRequests = '[Search] search requests',
  searchRequestsSuccess = '[Search] search requests success',
  searchRequestsFailure = '[Search] search requests failure',
}

export const searchReservations = createAction(SearchActions.searchReservations, props<{model: SearchModel }>());
export const searchRequests = createAction(SearchActions.searchRequests, props<{model: SearchModel }>());

export const searchReservationsSuccess = createAction(SearchActions.searchReservationsSuccess, props<{result: Array<ReservationModel>}>());
export const searchRequestsSuccess = createAction(SearchActions.searchRequestsSuccess, props<{result: Array<RequestModel>}>());

export const searchReservationsFailure = createAction(
  SearchActions.searchReservationsFailure,
  props< { error: string} >()
);
export const searchRequestsFailure = createAction(
  SearchActions.searchRequestsFailure,
  props< { error: string} >()
);
