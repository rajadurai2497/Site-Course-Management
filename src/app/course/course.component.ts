import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { AllCourse } from '../models/course/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers :[CourseService]
})
export class CourseComponent implements OnInit {

  allCourse: AllCourse[] = [];
  constructor(private readonly _courseService: CourseService) { }

  

  ngOnInit(): void {
    this.getAllCourselist();
  }
  public getAllCourselist(): void {
    this._courseService.getAllCourselist().then((data) => {
      if (data && data.result) {
        this.allCourse = data.allCourse;
      }
    });
  }
  public goToDetails(course): void {
    this._courseService.currentCourse=course;
  }
}


  