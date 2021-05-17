import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RequestModel} from '../model/model';
import {catchError} from 'rxjs/operators';

const baseUrl = 'http://localhost:8080/api/req';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<Array<RequestModel>>(baseUrl)
      .pipe(catchError(this.handleError));  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(data): Observable<any> {
    return this.http.put(`${baseUrl}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
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
