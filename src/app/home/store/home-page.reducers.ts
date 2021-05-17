import {Action, createReducer, on} from '@ngrx/store';
import {homePageInitialState, HomePageState} from './state';
import {
  createRequestFailure,
  deleteRequest,
  deleteRequestFailure,
  deleteReservation,
  deleteReservationFailure,
  loadRequests,
  loadRequestsFailure,
  loadRequestsSuccess,
  loadReservations,
  loadReservationsFailure,
  loadReservationsSuccess,
  updateRequest,
  updateRequestFailure, updateReservation, updateReservationFailure
} from './home-page.actions';

// tslint:disable-next-line:variable-name
const _reducer = createReducer(
  homePageInitialState,
  on(loadRequests,
    (state): HomePageState => {
    return {
    ...state,
      loading: true
    };
  }
  ),
  on(
    loadRequestsSuccess,
    (state, action): HomePageState => {
      return {
        ...state,
        requests: action.requests,
        error: '',
        loading: false
      };
    }
  ),
  on(loadRequestsFailure, (state, action): HomePageState => {
    return {
      ...state,
      requests: [],
      error: action.error,
      loading: false
    };
  }),
  on(createRequestFailure, (state, action): HomePageState => {
    return {
      ...state,
      error: action.error,
      loading: false
    };
  }),
  on(deleteReservation, (state): HomePageState => {
      return {
        ...state,
        loading: true
      };
    }
  ),
  on(updateRequest, (state): HomePageState => {
    return {
      ...state,
      loading: true
    };
  }),
  on(deleteReservation, (state): HomePageState => {
      return {
        ...state,
        loading: true
      };
    }
  ),
  on(updateRequestFailure, (state, action): HomePageState => {
    return {
      ...state,
      error: action.error,
      loading: false
    };
  }),
  on(deleteRequest, (state): HomePageState => {
      return {
        ...state,
        loading: true
      };
    }
  ),
  on(deleteRequestFailure, (state, action): HomePageState => {
    return {
      ...state,
      error: action.error,
      loading: false
    };
  }),
  on(loadReservations,
    (state): HomePageState => {
      return {
        ...state,
        loading: true
      };
    }
  ),
  on(
    loadReservationsSuccess,
    (state, action): HomePageState => {
      return {
        ...state,
        reservations: action.reservations,
        error: '',
        loading: false
      };
    }
  ),
  on(loadReservationsFailure, (state, action): HomePageState => {
    return {
      ...state,
      reservations: [],
      error: action.error,
      loading: false
    };
  }),
  on(updateReservation, (state): HomePageState => {
    return {
      ...state,
      loading: true
    };
  }),
  on(updateReservationFailure, (state, action): HomePageState => {
    return {
      ...state,
      error: action.error,
      loading: false
    };
  }),
  on(deleteReservation, (state): HomePageState => {
      return {
        ...state,
        loading: true
      };
    }
  ),
  on(deleteReservationFailure, (state, action): HomePageState => {
    return {
      ...state,
      error: action.error,
      loading: false
    };
  }),
);

// tslint:disable-next-line:typedef
export function homePageReducers(state: HomePageState | undefined, action: Action) {
  return _reducer(state, action);
}
