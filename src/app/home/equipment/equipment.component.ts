import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectEquipmentLoading, selectWorkplace} from './store/equipment.selectors';
import {clearEquipment} from './store/equipmen.actions';
import {WorkplaceModel} from '../../shared/model/model';
import {AppState} from '../../store/reducers';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
})

/**
 * EquipmentDetailsComponent renders user details pop-up
 * clears user state on destroy
 */
export class EquipmentComponent implements OnInit, OnDestroy {
  public readonly loading$: Observable<boolean> = this.store.select(selectEquipmentLoading);
  public readonly equipment$: Observable<WorkplaceModel> = this.store.select(selectWorkplace);

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
  }


  public ngOnDestroy(): void {
    this.store.dispatch(clearEquipment());
  }


}
