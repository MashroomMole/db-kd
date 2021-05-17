import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/workplace';


@Injectable({
  providedIn: 'root'
})
export class WorkplaceService {

  constructor(private http: HttpClient) { }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
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
