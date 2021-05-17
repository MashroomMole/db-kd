import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {loadEquipment, loadEquipmentSuccess} from './equipmen.actions';
import {EquipmentAdapter} from './equipment.adapter';
import {AppState} from '../../../store/reducers';
import {WorkplaceService} from '../../../shared/services/workplace-service';
import {loadReservationsFailure} from '../../store/home-page.actions';

/**
 * equipmentEffects - communicates with server via HTTP
 */
@Injectable()
export class EquipmentEffects {
  /**
   * Loads details
   */
  public loadEquipment$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(loadEquipment),
        switchMap((action) =>
          this.workplaceService.get(action.id).pipe(
            map( (response) => {
              return loadEquipmentSuccess({model: EquipmentAdapter.adapter(response)});
            }),
              catchError(error => of(loadReservationsFailure({error})))
            )
          )
        );
  });

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private workplaceService: WorkplaceService,
  ) {}

}
