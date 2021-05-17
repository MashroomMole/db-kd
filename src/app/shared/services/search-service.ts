import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RequestModel} from '../model/model';
import {catchError} from 'rxjs/operators';

const baseUrl = 'http://localhost:8080/api/search';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }

  search(data): Observable<any> {
    return this.http.post(`${baseUrl}`, data);
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
