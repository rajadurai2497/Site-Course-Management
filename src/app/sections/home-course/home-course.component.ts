import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Router, NavigationExtras } from '@angular/router';
import { AllCourse } from 'src/app/models/course/course.model';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-home-course',
  templateUrl: './home-course.component.html',
  styleUrls: ['./home-course.component.scss']
})
export class HomeCourseComponent implements OnInit {
  courseLanguage="Tamil";
  allCourse: AllCourse[] = [];
  count:any[];
  constructor(private readonly _countService: CountService,private readonly _courseService: CourseService, private router: Router) { }

  ngOnInit() {
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
          this.getCount(element);
        });
      }
    });
  }
  public getCount(course: AllCourse): void{
    this._countService.getCount(course.courseMasterId).then((data)=>{
      this.count=data.countResult
    })
  }

  public goToDetails(course: AllCourse): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "courseId": course.courseMasterId,
        "courseName": course.courseName,
        "courseAmount": course.courseAmount,
        "provideWhat": course.provideWhat,
        "description": course.description,
        "dicountAmount":course.dicountAmount
      },
      skipLocationChange: true
    };

    this.router.navigate(['course-details'], navigationExtras);
  }
}
