import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ROUTE_CONFIG } from '../models/constant';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  public readonly routePrefix = 'Token/RegisterCommunity';
  constructor(private readonly httpClient: HttpClient) {}

  createCommunity(community: any): Observable<any> {

    const apiUrl = `${ROUTE_CONFIG.CourseManagementURL}/${this.routePrefix}`;
    return this.httpClient.post<any>(apiUrl, community);
  }




}
