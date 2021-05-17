import {ReservationModel} from '../../../shared/model/model';

export const SEARCH_FEATURE_KEY = 'SEARCH_STATE';


export interface SearchState {
  criteria: Array<Date>;
  result: Array<ReservationModel>;
  loading: boolean;
  error: string;
}

export const searchtInitialState: SearchState = {
  criteria: [],
  result: [],
  loading: false,
  error: '',
};
