import {createAction, props} from '@ngrx/store';
import {WorkplaceModel} from "../../../shared/model/model";

export enum EquipmenActions {
  loadEquipmentSuccess = '[Equipment] load equipment details success',
  loadEquipment = '[Equipment] load equipment details',
  loadEquipmentFailure = '[Equipment] load equipment details failure',
  clearEquipment = '[User] equipment clear state'
}

export const loadEquipment = createAction(EquipmenActions.loadEquipment, props<{ id: number }>());

export const loadEquipmentSuccess = createAction(
  EquipmenActions.loadEquipmentSuccess,
  props< { model: WorkplaceModel} >()
);

export const loadEquipmentFailure = createAction(
  EquipmenActions.loadEquipmentFailure,
  props< { error: string} >()
);

export const clearEquipment = createAction(
  EquipmenActions.clearEquipment);
