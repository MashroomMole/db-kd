import {ActionReducerMap} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {ROUTER_FEATURE_KEY, RouterState} from '../router/router';
import {HOME_PAGE_FEATURE_KEY, HomePageState} from '../../home/store/state';
import {EQUIPMENT_FEATURE_KEY, EquipmentState} from '../../home/equipment/store/state';
import {SEARCH_FEATURE_KEY, SearchState} from "../../admin/search/store/state";


export interface State {
  router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};

export interface AppState {
  [ROUTER_FEATURE_KEY]?: RouterState;
  [HOME_PAGE_FEATURE_KEY]?: HomePageState;
  [EQUIPMENT_FEATURE_KEY]?: EquipmentState;
  [SEARCH_FEATURE_KEY]?: SearchState;
}
