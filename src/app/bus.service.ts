import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class BusService {

  private _url: string = "http://localhost:8080/bus-ticket-booking-system/bus";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getBuses() {
    return this.http.get(this._url + "/all");
  }
  addBus(bus: any) {
    let response = this.http.post(this._url + "/add", JSON.stringify(bus), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError)).toPromise();
    return response;
  }
  getBus(id: any) {
    let response = this.http.get(this._url + "/" + id).toPromise();
    return response;
  }
  updateBus(bus: any) {
    let response = this.http.put(this._url + "/update", JSON.stringify(bus), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError)).toPromise();
    return response;
  }
  deleteBus(id: any) {
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
