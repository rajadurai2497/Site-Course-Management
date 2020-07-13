import { Injectable} from '@angular/core';
import { ApiService } from './api.service';
import { ROUTE_CONFIG } from '../models/constant';
import { HttpClient } from '@angular/common/http';
import { AllCourse } from '../models/course/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService extends ApiService{
currentCourse: AllCourse;
  constructor(private readonly httpClient: HttpClient) {
    super( httpClient);
  }
  getAllCourselist(): Promise<any> {
    const apiUrl = ROUTE_CONFIG. BasicURL + `/Course/GetAllCourseList`;
    return this.doGet(apiUrl, true);
  }

}





  
