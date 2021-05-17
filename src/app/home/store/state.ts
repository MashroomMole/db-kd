import {RequestModel, ReservationModel} from '../../shared/model/model';

export const HOME_PAGE_FEATURE_KEY = 'HOME_PAGE_STATE';

export interface HomePageState {
  requests: Array<RequestModel>;
  reservations: Array<ReservationModel>;
  loading: boolean;
  error: string;
}

export const homePageInitialState: HomePageState = {
  requests: [],
  reservations: [],
  loading: false,
  error: ''
};
