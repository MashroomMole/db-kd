import {Action, createReducer, on} from '@ngrx/store';
import {equipmentInitialState, EquipmentState} from './state';
import {clearEquipment, loadEquipment, loadEquipmentFailure, loadEquipmentSuccess} from './equipmen.actions';


// tslint:disable-next-line:variable-name
const _reducer = createReducer(
  equipmentInitialState,
  on(loadEquipment,
    (state): EquipmentState => {
      return {
        ...state,
        loading: true
      };
    }),
  on(
    loadEquipmentSuccess,
    (state, action): EquipmentState => {
      debugger;
      return {
        ...state,
        model: action.model,
        loading: false
      };
    }
  ),
  on(loadEquipmentFailure, (state, action): EquipmentState => {
    return {
      ...state,
      model: null,
      loading: false,
      error: action.error,
    };
  }),
  on(clearEquipment, () => ({ ...equipmentInitialState }))
);

// tslint:disable-next-line:typedef
export function equipmentReducer(state: EquipmentState | undefined, action: Action) {
  return _reducer(state, action);
}
