import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ROUTE_CONFIG } from '../models/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  PaymentUrl = 'http://coursemanagement-001-site1.etempurl.com/api';
  constructor(private readonly _http: HttpClient) {}

  insertOrder(courseId: string, access_token): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'bearer ' + access_token);
    const requestOptions = {
      headers: headers,
    };
    const apiUrl = this.PaymentUrl + `/Payment/InsertOrder?CourseMasterId=${courseId}`;
    return this._http.get<Observable<any>>(apiUrl, requestOptions);
  }

  verifyPayment(payload: any, access_token): Observable<any> {
    let headers = new HttpHeaders();
  
    headers = headers.append('Authorization', 'bearer ' + access_token);
    headers=headers.append("Content-Type", "application/json-patch+json")
    headers=headers.append("Access-Control-Allow-Origin", "*")
    const requestOptions = {
      headers: headers,
    };
    const apiUrl = this.PaymentUrl + `/Payment/VerifyPayment`;
    return this._http.post<Observable<any>>(apiUrl, payload, requestOptions);
  }
}
