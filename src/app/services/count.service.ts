import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { ROUTE_CONFIG } from '../models/constant';

@Injectable({
  providedIn: 'root'
})
export class CountService extends ApiService{

  constructor(private readonly httpClient: HttpClient) {
    super(httpClient);
   }
   getCount(CourseMasterId): Promise<any> {
    const apiUrl = ROUTE_CONFIG.BasicURL + `/Admin/GetCount?CourseMasterId=`+CourseMasterId;
    return this.doGet(apiUrl, true);
  }
}