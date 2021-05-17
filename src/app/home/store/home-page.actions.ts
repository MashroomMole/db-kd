import {createAction, props} from '@ngrx/store';
import {RequestModel, ReservationModel, WorkplaceModel} from '../../shared/model/model';

export enum HomePageActions {
  loadRequestsSuccess = '[Requests] load requests success',
  loadRequests = '[Requests] load requests',
  loadRequestsFailure = '[Requests] load requests failure',
  createRequest = '[Requests] create request',
  createRequestSuccess = '[Requests] create request success',
  createRequestFailure = '[Requests] create request failure',
  updateRequest = '[Requests] update request',
  updateRequestFailure = '[Requests] update request failure',
  deleteRequest = '[Requests] delete request',
  deleteRequestSuccess = '[Requests] delete request success',
  deleteRequestFailure = '[Requests] delete request failure',
  createReservation = '[Reservations] create reservation',
  createReservationSuccess = '[Reservations] create reservation success',
  createReservationFailure = '[Reservations] create reservation failure',
  updateReservation = '[Reservations] update reservation',
  updateReservationFailure = '[Requests] update reservation failure',
  loadReservationsSuccess = '[Reservations] load reservations success',
  loadReservations = '[Reservations] load reservation',
  loadReservationsFailure = '[Reservations] load reservations failure',
  deleteReservation = '[Reservations] delete reservation',
  deleteReservationFailure = '[Reservations] delete reservation failure',
  openEquipment = '[Equipment] open equipment dialog'
}

export const loadRequests = createAction(HomePageActions.loadRequests);
export const loadRequestsSuccess = createAction(
  HomePageActions.loadRequestsSuccess,
  props< { requests: Array<RequestModel>} >()
);
export const loadRequestsFailure = createAction(
  HomePageActions.loadRequestsFailure,
  props< { error: string } >()
);

export const createRequest = createAction(HomePageActions.createRequest,
  props<{ request: RequestModel}>());
export const createRequestSuccess = createAction(HomePageActions.createRequestSuccess,
  props<{ request: RequestModel}>());
export const createRequestFailure = createAction(
  HomePageActions.createRequestFailure,
  props< { error: string } >()
);

export const updateRequest = createAction(HomePageActions.updateRequest,
  props<{ model: RequestModel}>());
export const updateRequestFailure = createAction(
  HomePageActions.updateRequestFailure,
  props< { error: string } >()
);


export const deleteRequest = createAction(HomePageActions.deleteRequest,
  props<{ id: number}>());
export const deleteRequestSuccess = createAction(HomePageActions.deleteRequestSuccess,
  props<{id: number}>());
export const deleteRequestFailure = createAction(
  HomePageActions.deleteRequestFailure,
  props< { error: string } >()
);

export const loadReservations = createAction(HomePageActions.loadReservations);
export const loadReservationsSuccess = createAction(
  HomePageActions.loadReservationsSuccess,
  props< { reservations: Array<ReservationModel>} >()
);

export const createReservation = createAction(HomePageActions.createReservation,
  props<{ reservation: ReservationModel}>());
export const createReservationSuccess = createAction(HomePageActions.createReservationSuccess,
  props<{ reservation: ReservationModel}>());
export const createReservationFailure = createAction(
  HomePageActions.createReservationFailure,
  props< { error: string } >()
);
export const updateReservation = createAction(HomePageActions.updateReservation,
  props<{ model: ReservationModel}>());
export const updateReservationFailure = createAction(
  HomePageActions.updateReservationFailure,
  props< { error: string } >()
);
export const deleteReservation = createAction(HomePageActions.deleteReservation,
  props<{ id: number}>());
export const deleteReservationFailure = createAction(
  HomePageActions.deleteReservationFailure,
  props< { error: string } >()
);

export const loadReservationsFailure = createAction(
  HomePageActions.loadReservationsFailure,
  props< { error: string } >()
);

export const openEquipment = createAction(HomePageActions.openEquipment, props<{id: number}>());

