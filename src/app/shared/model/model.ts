export interface HomePageModel {
 requests: Array<RequestModel>;
 reservations: Array<ReservationModel>;
}

export interface RequestModel {
  id: string;
  type: string;
  status: string;
  submission_date: string;
  date_from: string;
  date_to: string;
  user_fk: string;
  approvedBy_fk: string;
}

export interface ReservationModel {
  id: string;
  type: string;
  status: string;
  submission_date: string;
  requested_for: string;
  workplace_fk: string;
  resemployee_fk: string;
  resapprovedby_fk: string;
}

export interface WorkplaceModel {
  id: string;
  floor: string;
  room: string;
  desk: string;
  equipment: Array<EquipmentModel>;
}
export interface EquipmentModel {
  id: string;
  description: string;
  quantity: string;
}

export interface SearchModel {
  criteria: Array<Date>;
}
