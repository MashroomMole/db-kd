import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {createRequest, createReservation} from '../../home/store/home-page.actions';

@Injectable({
  providedIn: 'root'
})

export class DialogService {

  constructor(private dialog: MatDialog) {}

  public openDialog(
    store: any,
    component: any,
    page: number,
    width?: string,
    height?: string,
    hasBackdrop?: boolean,
    closeOnNavigation?: boolean,
  ): Observable<void> {
    let entryDialogRef: MatDialogRef<any>;
    entryDialogRef = this.dialog.open(
      component, {
        hasBackdrop,
        closeOnNavigation,
        width,
        height,
        maxHeight: '400vh',
        maxWidth: '100vw',
      });
    return entryDialogRef
      .afterClosed()
      .pipe(
        map(
          (result) => {
            if (result) {
              switch (page) {
                case 1:
                  store.dispatch(createReservation({reservation: result}));
                  break;
                case 0:
                  store.dispatch(createRequest({request: result}));
              }
            }
          }
        )
      );
  }
}
