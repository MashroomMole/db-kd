import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SEARCH_FEATURE_KEY} from './store/state';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {searchReducer} from './store/search.reducer';
import {SearchEffects} from './store/search.effects';
import {ReservationSearchCriteriaComponent} from './reservation-search-criteria.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {RequestSearchCriteriaComponent} from './request-search-criteria.component';

@NgModule({
  declarations: [ ReservationSearchCriteriaComponent, RequestSearchCriteriaComponent ],
    exports: [
        ReservationSearchCriteriaComponent,
        RequestSearchCriteriaComponent
    ],
  imports: [
    StoreModule.forFeature(SEARCH_FEATURE_KEY, searchReducer),
    EffectsModule.forFeature([SearchEffects]),
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    MatTooltipModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class SearchModule {}
