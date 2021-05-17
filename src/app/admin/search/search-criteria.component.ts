import {Component} from '@angular/core';
import {AppState} from '../../store/reducers';
import {Store} from '@ngrx/store';
import {searchReservations} from './store/search.actions';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
})
/**
 * Search criteria component
 */
export class SearchCriteriaComponent {
  form: FormGroup;
  end: FormGroup;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.form = this.fb.group( {
      date_from: '',
      date_to: ''
    });
  }

  public onSearch(): void {
    if (this.form.valid) {
      this.store.dispatch(searchReservations({model: this.form.getRawValue()}));
    }
  }
}
