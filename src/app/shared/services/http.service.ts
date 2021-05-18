import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RequestModel} from '../model/model';
import {catchError} from 'rxjs/operators';

enum BaseUrls {
  reservationUrl = 'http://localhost:8080/api/reservations',
  requestUrl = 'http://localhost:8080/api/req',
  searchUrl = 'http://localhost:8080/api/search',
  workplaceUrl = 'http://localhost:8080/api/workplace'
}


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAllRequests(): Observable<any> {
    return this.http.get<Array<RequestModel>>(BaseUrls.requestUrl)
      .pipe(catchError(this.handleError));  }

  createRequest(data): Observable<any> {
    return this.http.post(BaseUrls.requestUrl, data);
  }

  updateRequest(data): Observable<any> {
    return this.http.put(`${BaseUrls.requestUrl}`, data);
  }

  deleteRequest(id): Observable<any> {
    return this.http.delete(`${BaseUrls.requestUrl}/${id}`);
  }

  getAllReservations(): Observable<any> {
    return this.http.get<Array<RequestModel>>(BaseUrls.reservationUrl)
      .pipe(catchError(this.handleError));  }

  createReservation(data): Observable<any> {
    return this.http.post(BaseUrls.reservationUrl, data);
  }

  updateReservation(data): Observable<any> {
    return this.http.put(`${BaseUrls.reservationUrl}`, data);
  }

  deleteReservation(id): Observable<any> {
    return this.http.delete(`${BaseUrls.reservationUrl}/${id}`);
  }

  deleteAllReservations(): Observable<any> {
    return this.http.delete(BaseUrls.reservationUrl);
  }

  getWorkplace(id): Observable<any> {
    return this.http.get(`${BaseUrls.workplaceUrl}/${id}`);
  }

  search(data): Observable<any> {
    return this.http.post(`${BaseUrls.searchUrl}`, data);
  }


  public handleError(err: any): Observable<any> {
    // supports logging to the console only
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // Handles client-side or network errors
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // Handles server-side errors
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
