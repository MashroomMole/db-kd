import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {
  createRequest,
  createRequestFailure,
  createReservation,
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
  updateRequestFailure,
  updateReservation,
  updateReservationFailure
} from './home-page.actions';
import {AppState} from '../../store/reducers';
import {RequestService} from '../../shared/services/request-service';
import {ReservationService} from '../../shared/services/reservation-service';

/**
 * HomePageEffects - communicates with server via HTTP
 */
@Injectable()
export class HomePageEffects {
  /**
   * Loads all requests for a Home page
   */
  public loadRequests$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(loadRequests),
        switchMap(() => {
          return this.requestService.getAll()
            .pipe(
              map(requests => {
                return loadRequestsSuccess({requests});
              }),
              catchError(error => of(loadRequestsFailure({error})))
            );
        })
      );
  });

  /**
   * Loads all reservations
   */
  public loadReservations$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(loadReservations),
        switchMap(() => {
          return this.reservationService.getAll()
            .pipe(
              map(reservations => {
                return loadReservationsSuccess({reservations});
              }),
              catchError(error => of(loadReservationsFailure({error})))
            );
        })
      );
  });

  /**
   * Handles add request
   */
  addRequest$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(createRequest),
        switchMap(action =>
          this.requestService.create(action.request)
            .pipe(
              map(() => {
                return loadRequests();
              }),
              catchError(error => of(createRequestFailure({ error })))
            )
        ));
  });

  /**
   * Handles update request
   */
  updateRequest$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(updateRequest),
        switchMap(action =>
          this.requestService.update(action.model)
            .pipe(
              map(() => {
                return loadRequests();
              }),
              catchError(error => of(updateRequestFailure({ error })))
            )
        ));
  });

  /**
   * Handles delete request
   */
  deleteRequest$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(deleteRequest),
        switchMap(action =>
          this.requestService.delete(action.id)
            .pipe(
              map(() => {
                return loadRequests();
              }),
              catchError(error => of(deleteRequestFailure({ error })))
            )
        ));
  });

  /**
   * Handles add reservation
   */
  addReservation$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(createReservation),
        switchMap(action =>
          this.reservationService.create(action.reservation)
            .pipe(
              map(() => {
                return loadReservations();
              }),
              catchError(error => of(createRequestFailure({ error })))
            )
        ));
  });

  /**
   * Handles update request
   */
  updateReservation$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(updateReservation),
        switchMap(action =>
          this.reservationService.update(action.model)
            .pipe(
              map(() => {
                return loadReservations();
              }),
              catchError(error => of(updateReservationFailure({ error })))
            )
        ));
  });


  /**
   * Handles delete reservation
   */
  deleteReservation$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(deleteReservation),
        switchMap(action =>
          this.reservationService.delete(action.id)
            .pipe(
              map(() => {
                return loadReservations();
              }),
              catchError(error => of(deleteReservationFailure({ error })))
            )
        ));
  });

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private requestService: RequestService,
    private reservationService: ReservationService,
  ) {}
}
