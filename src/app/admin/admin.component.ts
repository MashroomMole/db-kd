import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../store/reducers';
import {selectReqResult, selectResResult, selectSearchLoading} from './search/store/search.selectors';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
/**
 * Admin component
 */
export class AdminComponent implements OnInit {
  public readonly searchResResult$: Observable<Array<any>>  = this.store.select(selectResResult);
  public readonly searchReqResult$: Observable<Array<any>>  = this.store.select(selectReqResult);

  public readonly loading$: Observable<boolean> = this.store.select(selectSearchLoading);

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
  }


}
