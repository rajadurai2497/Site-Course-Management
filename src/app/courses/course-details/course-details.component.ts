import { Component, OnInit } from '@angular/core';
import { SignupComponent } from 'src/app/signup/signup.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AllCourse } from 'src/app/models/course/course.model';
import { CourseService } from 'src/app/services/course.service';
import { CountService } from 'src/app/services/count.service';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
  providers: [CourseService],
})
export class CourseDetailsComponent implements OnInit {
  currentCourse:AllCourse;
  courseMasterId:number=0;
  learnersCount:number=10250;

  constructor(private dialog: MatDialog,private readonly _countService: CountService,
    private readonly _courseService: CourseService,
     private route: ActivatedRoute,
      private readonly router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.forEach((params) => {
      if (params['course']) {
        this.courseMasterId = params['course'];
      }
    });
    this.getAllCourselist();
    this.getCount();
  }
  signup() {
    const dialogRef = this.dialog.open(SignupComponent, {
      height: '700px',
      width: '400px',
    });
  }
  public getCount(): void{
    this._countService.getCount(this.courseMasterId).then((data)=>{
      this.learnersCount=data.countResult;
    })
  }
  public onPurchaseNowButtonClick(): void {
    this.router.navigate(['/signup'], { queryParams: { course: this.courseMasterId } });
  }
  public getAllCourselist(): void {
    this._courseService.getAllCourselist().then((data) => {
      if (data && data.result) {
        data.allCourse.forEach(element => {
          if(this.courseMasterId==element.courseMasterId){
            this.currentCourse = element;
            } 
        });
      }
    });
  }
}

 
  

  
