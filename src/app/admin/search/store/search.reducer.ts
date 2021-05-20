import {Action, createReducer, on} from '@ngrx/store';
import {SearchState, searchtInitialState} from './state';
import {
  searchRequests,
  searchRequestsSuccess,
  searchReservations,
  searchReservationsFailure,
  searchReservationsSuccess
} from './search.actions';


// tslint:disable-next-line:variable-name
const _reducer = createReducer(
  searchtInitialState,
  on(searchReservations,
    (state): SearchState => {
      return {
        ...state,
        loading: true
      };
    }),
  on(
    searchReservationsSuccess,
    (state, action): SearchState => {
      return {
        ...state,
        resultRes: action.result,
        loading: false
      };
    }
  ),
  on(searchReservationsFailure, (state, action): SearchState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(searchRequests,
    (state): SearchState => {
      return {
        ...state,
        loading: true
      };
    }),
  on(
    searchRequestsSuccess,
    (state, action): SearchState => {
      return {
        ...state,
        resultReq: action.result,
        loading: false
      };
    }
  ),
  on(searchReservationsFailure, (state, action): SearchState => {
    return {
      ...state,
      error: action.error,
    };
  }),
);

// tslint:disable-next-line:typedef
export function searchReducer(state: SearchState | undefined, action: Action) {
  return _reducer(state, action);
}
