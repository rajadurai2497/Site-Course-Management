import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG } from '../models/constant';

@Injectable({
  providedIn: 'root'
})
export class QueriesService {
  public readonly routePrefix = '​Token​/ContactusSave';
  constructor(private readonly httpClient: HttpClient) { }

  createQueries(queries: any): Observable<any> {

    const apiUrl = `${ROUTE_CONFIG.CourseManagementURL}/${this.routePrefix}`;
    return this.httpClient.post<any>(apiUrl, queries);
  }



}
