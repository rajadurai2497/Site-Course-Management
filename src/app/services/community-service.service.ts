import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ROUTE_CONFIG } from '../models/constant';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CommunityService extends ApiService {
  public readonly routePrefix = 'Token';
  constructor(private readonly httpClient: HttpClient) {
    super(httpClient);
  }

  createCommunity(community): Promise<any> {

    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Token/RegisterUser`;
    return this.doPost(apiUrl, community , true);
  }




}
