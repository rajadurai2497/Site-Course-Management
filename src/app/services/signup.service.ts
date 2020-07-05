import { Injectable, Injector } from '@angular/core';
import { ROUTE_CONFIG } from '../models/constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService extends ApiService {

  public readonly routePrefix = 'Token/RegisterUser';
  constructor(private readonly httpClient: HttpClient) {
    super( httpClient);
  }

  createSignup(signup): Promise<any> {

    const apiUrl = ROUTE_CONFIG.CourseManagementURL+`/Token/RegisterUser`;
    return this.doPost(apiUrl, signup,true);
  }
}
