import { Injectable, Injector } from '@angular/core';
import { ROUTE_CONFIG } from '../models/constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  public readonly routePrefix = 'Token/RegisterUser';
  constructor(private readonly httpClient: HttpClient) {}

  createSignup(signup: any): Observable<any> {

    const apiUrl = `${ROUTE_CONFIG.CourseManagementURL}/${this.routePrefix}`;
    return this.httpClient.post<any>(apiUrl, signup);
  }




}
