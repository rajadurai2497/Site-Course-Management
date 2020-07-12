import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { AllCourse } from '../models/course/course.model';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers: [CourseService],
})
export class CourseComponent implements OnInit {
  allCourse: AllCourse[] = [];
  constructor(private readonly _courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.getAllCourselist();
  }
  public getAllCourselist(): void {
    this._courseService.getAllCourselist().then((data) => {
      if (data && data.result) {
        this.allCourse = data.allCourse;
        this.allCourse .forEach(element => {
          if(element.description && element.description.length>230){
            element.shortDesc=element.description.substring(0,230);
          }
          else{
            element.shortDesc=element.description;
          }
          
        });
      }
    });
  }
  public goToDetails(course: AllCourse): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        courseId: course.courseMasterId,
        courseName: course.courseName,
        courseAmount: course.courseAmount,
        provideWhat: course.provideWhat,
        description: course.description,
      },
      skipLocationChange: true,
    };
    this.router.navigate(['course-details'], navigationExtras);
  }
}
