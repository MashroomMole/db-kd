import {createFeatureSelector, createSelector} from '@ngrx/store';
import {EQUIPMENT_FEATURE_KEY, EquipmentState} from './state';

export const selectEquipmentState = createFeatureSelector<EquipmentState>(EQUIPMENT_FEATURE_KEY);
export const selectWorkplace = createSelector(selectEquipmentState, state => state.model);

export const selectEquipmentLoading = createSelector(selectEquipmentState, state => state.loading);


