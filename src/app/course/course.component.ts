import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { AllCourse } from '../models/course/course.model';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { CountService } from '../services/count.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers: [CourseService],
})
export class CourseComponent implements OnInit {
  
  allCourse: AllCourse[] = [];
  count: any[]
  courseMasterId:number=0;
  constructor(private readonly _countService: CountService,private route: ActivatedRoute, private readonly _courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.forEach((params) => {
      if (params['course']) {
        this.courseMasterId = params['course'];
        this.getAllCourselist();
        return;
      }

    });
    
    this.getAllCourselist();
  }
  public getAllCourselist(): void {
    this._courseService.getAllCourselist().then((data) => {
      if (data && data.result) {
        this.allCourse = data.allCourse;
        this.allCourse.forEach(element => {
          if (element.description && element.description.length > 230) {
            element.shortDesc = element.description.substring(0, 230);
          }
          else {
            element.shortDesc = element.description;
          }
          element.count = 0;
          this.getCount(element);
          if(this.courseMasterId!=0 && element.courseMasterId==this.courseMasterId+""){
            this.goToDetails(element);
          }
        });
      }
    });
  }
  public getCount(course: AllCourse): void {
    this._countService.getCount(course.courseMasterId).then((data) => {
      course.count = data.countResult
    })
  }

  public goToDetails(course: AllCourse): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        course: course.courseMasterId,
      },
      skipLocationChange: false,
    };
    this.router.navigate(['course-details'], navigationExtras);
  }
}
