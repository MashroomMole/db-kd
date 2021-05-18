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
import {HttpService} from '../../shared/services/http.service';

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
          return this.service.getAllRequests()
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
          return this.service.getAllReservations()
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
          this.service.createRequest(action.request)
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
          this.service.updateRequest(action.model)
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
          this.service.deleteRequest(action.id)
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
          this.service.createReservation(action.reservation)
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
          this.service.updateReservation(action.model)
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
          this.service.deleteReservation(action.id)
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
    private service: HttpService,
  ) {}
}
