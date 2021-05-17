import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {ReservationModel} from '../../shared/model/model';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservation.component.css']
})
/**
 * ReservationsComponent renders details
 *  for each post on home page
 */
export class ReservationsComponent implements OnChanges{
  @Input()
  public reservations: Array<ReservationModel>;
  @Input()
  public loading: boolean;
  @Input()
  public result: Array<ReservationModel>;
  @Output()
  public deleteAction: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  public approveAction: EventEmitter<ReservationModel> = new EventEmitter<ReservationModel>();
  @Output()
  public equipment: EventEmitter<number> = new EventEmitter<number>();

  displayedColumns: string[] = [ 'workplace_fk', 'requested_for', 'resemployee_fk', 'approved', 'equipment', 'delete'];
  public dataSource: MatTableDataSource<ReservationModel>;

  constructor(private router: Router, private datePipe: DatePipe) {}

public ngOnChanges(changes: SimpleChanges): void {
  if ('reservations' in changes) {
    this.dataSource = new MatTableDataSource(this.reservations);
  }
  if ('result' in changes) {
    this.dataSource = new MatTableDataSource(this.result);
  }
}

  public approve(model: ReservationModel): void {
    this.approveAction.emit(model);
  }

  public delete(id: number): void {
    this.deleteAction.emit(id);
  }

  public openEquipment(id: number): void {
    this.equipment.emit(id);
  }
}


