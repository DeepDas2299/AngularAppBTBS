import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private _url: string = "http://localhost:8080/bus-ticket-booking-system/role";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }
  async getRoles() {
    let response = this.http.get(this._url + "/all", this.httpOptions).toPromise();
    return response;
  }
}
