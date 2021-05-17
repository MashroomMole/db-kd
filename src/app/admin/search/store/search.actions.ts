import {createAction, props} from '@ngrx/store';
import {ReservationModel, SearchModel} from '../../../shared/model/model';

export enum SearchActions {
  searchReservations = '[Search] search reservations',
  searchReservationsSuccess = '[Search] search reservations success',
  searchReservationsFailure = '[Search] search reservations failure',
}

export const searchReservations = createAction(SearchActions.searchReservations, props<{model: SearchModel }>());

export const searchReservationsSuccess = createAction(SearchActions.searchReservationsSuccess, props<{result: Array<ReservationModel>}>());
export const searchReservationsFailure = createAction(
  SearchActions.searchReservationsFailure,
  props< { error: string} >()
);
