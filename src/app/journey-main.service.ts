import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JourneyMainService {

  private _url: string = "http://localhost:8080/bus-ticket-booking-system/journey";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  addJourney(journey: any) {
    let response = this.http.post(this._url + "/add", JSON.stringify(journey), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError)).toPromise();
    return response;
  }
  async searchJourney(searchDetails: any) {
    let response = this.http.post(this._url + "/search", JSON.stringify(searchDetails), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError)).toPromise();
    return response;
  }
  deleteJourney(id: any) {
    return this.http.delete(this._url + `/delete/${id}`, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status} \n  Error Message : ${error.message}`
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
