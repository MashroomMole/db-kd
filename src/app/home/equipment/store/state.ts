import {WorkplaceModel} from '../../../shared/model/model';

export const EQUIPMENT_FEATURE_KEY = 'EQUIPMENT_STATE';


export interface EquipmentState {
  model: WorkplaceModel;
  loading: boolean;
  error: string;
}

export const equipmentInitialState: EquipmentState = {
  model: null,
  loading: false,
  error: '',
};
