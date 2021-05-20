import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {
  searchRequests, searchRequestsFailure,
  searchRequestsSuccess,
  searchReservations,
  searchReservationsFailure,
  searchReservationsSuccess
} from './search.actions';
import {AppState} from '../../../store/reducers';
import {HttpService} from '../../../shared/services/http.service';

/**
 * equipmentEffects - communicates with server via HTTP
 */
@Injectable()
export class SearchEffects {
  /**
   * Search reservations
   */
  public searchReservations$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(searchReservations),
        switchMap((action) =>
          this.service.searchReservations(action.model).pipe(
            map( (response) => {
              return searchReservationsSuccess({result: response});
            }),
              catchError(error => of(searchReservationsFailure({error})))
            )
          )
        );
  });

  /**
   * Search requests
   */
  public searchRequests$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(searchRequests),
        switchMap((action) =>
          this.service.searchRequests(action.model).pipe(
            map( (response) => {
              return searchRequestsSuccess({result: response});
            }),
            catchError(error => of(searchRequestsFailure({error})))
          )
        )
      );
  });

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private service: HttpService,
  ) {}

}
