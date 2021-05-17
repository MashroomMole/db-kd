import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {searchReservations, searchReservationsFailure, searchReservationsSuccess} from './search.actions';
import {AppState} from '../../../store/reducers';
import {SearchService} from '../../../shared/services/search-service';

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
          this.searchService.search(action.model).pipe(
            map( (response) => {
              return searchReservationsSuccess({result: response});
            }),
              catchError(error => of(searchReservationsFailure({error})))
            )
          )
        );
  });

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private searchService: SearchService,
  ) {}

}
