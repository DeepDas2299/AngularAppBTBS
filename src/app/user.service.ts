import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url: string = "http://localhost:8080/bus-ticket-booking-system/user";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  async getUserByEmail(email: any) {
    let response = this.http.post(this._url + "/email", JSON.stringify(email), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError)).toPromise();
    console.log(response)
    return response;
  }
  addUser(user: any) {
    let response = this.http.post(this._url + "/add", JSON.stringify(user), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError)).toPromise();
    return response;
  }
  updateUser(user: any) {
    let response = this.http.put(this._url + "/update", JSON.stringify(user), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError)).toPromise();
    return response;
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
