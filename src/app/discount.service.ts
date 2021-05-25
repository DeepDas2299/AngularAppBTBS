import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  private _url: string = "http://localhost:8080/bus-ticket-booking-system/discount";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  addDiscount(discount: any) {
    let response = this.http.post(this._url + "/add", JSON.stringify(discount), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError)).toPromise();
    return response;
  }
  getDiscountByBusId(id: any) {
    let response = this.http.get<any[]>(this._url + "/bus/" + id).toPromise();
    //console.log(response)
    return response;
  }
  deleteDiscount(id: any) {
    return this.http.delete(this._url + `/delete/${id}`, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  getDiscounts() {
    let response = this.http.get(this._url + "/all").toPromise();
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
