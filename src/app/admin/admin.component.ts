import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ReservationModel} from '../shared/model/model';
import {Store} from '@ngrx/store';
import {AppState} from '../store/reducers';
import {selectResult, selectSearchLoading} from './search/store/search.selectors';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
/**
 * Admin component
 */
export class AdminComponent implements OnInit {
  public readonly searchResult$: Observable<Array<ReservationModel>> = this.store.select(selectResult);
  public readonly loading$: Observable<boolean> = this.store.select(selectSearchLoading);

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
  }


}
