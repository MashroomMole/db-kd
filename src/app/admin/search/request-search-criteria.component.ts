import {Component} from '@angular/core';
import {AppState} from '../../store/reducers';
import {Store} from '@ngrx/store';
import {searchRequests} from './store/search.actions';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-request-search-criteria',
  templateUrl: './request-search-criteria.component.html',
})
/**
 * Search criteria component
 */
export class RequestSearchCriteriaComponent {
  form: FormGroup;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.form = this.fb.group( {
      type: [1, 0],
      date_from: '',
      date_to: '',
      // status: ['New', 'Approved']
    });
  }

  public onSearch(): void {
    if (this.form.valid) {
      this.store.dispatch(searchRequests({model: this.form.getRawValue()}));
    }
  }
}
