import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CommonModule, DatePipe} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {HOME_PAGE_FEATURE_KEY} from './store/state';
import {homePageReducers} from './store/home-page.reducers';
import {RequestComponent} from './requests/request.component';
import {HomePageEffects} from './store/home-page.effects';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {ReservationsComponent} from './reservations/reservations.component';
import {TypePipe} from './type-pipe';
import {RequestDialogComponent} from './requests/request-dialog/request-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ResrvationDialogComponent} from './reservations/reservation-dialog/resrvation-dialog.component';
import {MatSortModule} from '@angular/material/sort';
import {AdminComponent} from '../admin/admin.component';
import {SearchCriteriaComponent} from '../admin/search/search-criteria.component';
import {DatePipe1} from './date-pipe';
import {EquipmentModule} from './equipment/equipment.module';
import {SearchModule} from "../admin/search/search.module";

@NgModule({
  declarations: [
    HomeComponent,
    RequestComponent,
    ReservationsComponent,
    RequestDialogComponent,
    ResrvationDialogComponent,
    AdminComponent,
    TypePipe,
    DatePipe1
  ],
  exports: [
  ],
    imports: [
        StoreModule.forFeature(HOME_PAGE_FEATURE_KEY, homePageReducers),
        EffectsModule.forFeature([HomePageEffects]),
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatIconModule,
        MatTooltipModule,
        EquipmentModule,
        MatSortModule,
        SearchModule,
    ]
})
export class HomeComponentModule {}
