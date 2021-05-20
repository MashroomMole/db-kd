import {RequestModel, ReservationModel} from '../../../shared/model/model';

export const SEARCH_FEATURE_KEY = 'SEARCH_STATE';


export interface SearchState {
  criteria: Array<Date>;
  resultRes: Array<ReservationModel>;
  resultReq: Array<RequestModel>;
  loading: boolean;
  error: string;
}

export const searchtInitialState: SearchState = {
  criteria: [],
  resultRes: [],
  resultReq: [],
  loading: false,
  error: '',
};
