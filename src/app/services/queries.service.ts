import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG } from '../models/constant';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class QueriesService extends ApiService {
  constructor(private readonly httpClient: HttpClient) {
    super(httpClient);
  }

  createQueries(queries): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + '​/Token​/ContactusSave';
    return this.doPost(apiUrl, queries, true);
  }
}
