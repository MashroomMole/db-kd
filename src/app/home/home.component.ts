import {Component, OnInit} from '@angular/core';
import {EquipmentModel, RequestModel, ReservationModel} from '../shared/model/model';
import {forkJoin, Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {
  deleteRequest,
  deleteReservation,
  loadRequests,
  loadReservations,
  updateRequest,
  updateReservation
} from './store/home-page.actions';
import {selectRequests, selectRequestsLoading, selectReservations} from './store/home-page.selectors';
import {AppState} from '../store/reducers';
import {Router} from '@angular/router';
import {DialogService} from '../shared/services/dialog-service';
import {RequestDialogComponent} from './requests/request-dialog/request-dialog.component';
import {ResrvationDialogComponent} from './reservations/reservation-dialog/resrvation-dialog.component';
import {selectEquipment} from './equipment/store/equipment.selectors';
import {loadEquipment} from './equipment/store/equipmen.actions';
import {EquipmentComponent} from './equipment/equipment.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

/**
 * HomeComponent renders home screen
 */
export class HomeComponent implements OnInit {
  public readonly requests$: Observable<RequestModel[]> = this.store.select(selectRequests);
  public readonly reservations$: Observable<ReservationModel[]> = this.store.select(selectReservations);
  public readonly equipment$: Observable<Array<EquipmentModel>> = this.store.select(selectEquipment);



  public readonly loadingRequests$: Observable<boolean> = this.store.select(selectRequestsLoading);
  public readonly loadingReservations$: Observable<boolean> = this.store.select(selectRequestsLoading);


  public model: RequestModel;
  public reservationModel: ReservationModel;
  public id: number;

  constructor(private store: Store<AppState>, private router: Router, private dialogService: DialogService) {}

  public ngOnInit(): void {
    this.store.dispatch(loadRequests());
    this.store.dispatch(loadReservations());
  }


  public openRequestDialog(): void {
  this.dialogService.openDialog(
      this.store,
      RequestDialogComponent,
    0,
    'auto',
      'auto',
      false,
      false
    ).subscribe( () =>
    forkJoin( [
        this.store.dispatch(loadRequests()),
      ]
    ));
    }

  public openReservationDialog(): void {

    this.dialogService.openDialog(
      this.store,
      ResrvationDialogComponent,
      1,
      'auto',
      'auto',
      false,
      false
    ).subscribe( () =>
      forkJoin( [
          this.store.dispatch(loadReservations()),
        ]
      ));
  }

  public handleDelete(id: number): void {
    this.id = id;
    this.store.dispatch(deleteRequest( {id: this.id}
    ));
  }

  public handleApprove(model: RequestModel): void {
    this.model = model;
    console.log(this.model);

    this.store.dispatch(updateRequest( {model: this.model}
    ));
  }

  public handleReservationApprove(model: ReservationModel): void {
    this.reservationModel = model;
    this.store.dispatch(updateReservation( {model: this.reservationModel}
    ));
  }

  public handleOpenEquipment(id: number): void {
    this.store.dispatch(loadEquipment({id}));
    this.dialogService.openDialog(
      this.store,
      EquipmentComponent,
      2,
      'auto',
      'auto',
      true,
      true
    );
  }

  public handleDeleteReservations(id: number): void {
    this.id = id;
    this.store.dispatch(deleteReservation({id: this.id}
    ));
  }
}
