import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import { RequestModel } from '../../shared/model/model';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-requests',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
/**
 * ReservationsComponent renders reservations list
 */
export class RequestComponent implements OnChanges{
  @Input()
  public requests: Array<RequestModel>;
  @Input()
  public loading: boolean;

  @Output()
  public deleteAction: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public approveAction: EventEmitter<RequestModel> = new EventEmitter<RequestModel>();

  public status: number;

  displayedColumns: string[] = ['type', 'date_from', 'date_to', 'user_fk', 'approved', 'delete' ];
  public dataSource: MatTableDataSource<RequestModel>;

  constructor(private router: Router, private datePipe: DatePipe) {}

public ngOnChanges(changes: SimpleChanges): void {
  if ('requests' in changes) {
    this.dataSource = new MatTableDataSource(this.requests);
  }
}
  public approve(model: RequestModel): void {
    this.approveAction.emit(model);
  }

  public delete(id: number): void {
    this.deleteAction.emit(id);
  }

  public navigateToPost(reqId: string): Promise<boolean> {
    return this.router.navigateByUrl('req/' + reqId);
  }
}


