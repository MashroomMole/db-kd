import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {EQUIPMENT_FEATURE_KEY} from './store/state';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {equipmentReducer} from './store/equipment.reducer';
import {EquipmentEffects} from './store/equipment.effects';
import {EquipmentDetailsComponent} from './equipment-details/equipment-details.component';
import {EquipmentComponent} from './equipment.component';

@NgModule({
  declarations: [ EquipmentComponent, EquipmentDetailsComponent ],
  exports: [
  ],
  imports: [
    StoreModule.forFeature(EQUIPMENT_FEATURE_KEY, equipmentReducer),
    EffectsModule.forFeature([EquipmentEffects]),
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
  ]
})
export class EquipmentModule {}
