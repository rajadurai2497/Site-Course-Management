import { Component, OnInit } from '@angular/core';
import { SignupComponent } from 'src/app/signup/signup.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AllCourse } from 'src/app/models/course/course.model';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  courseMasterId: string;
    courseName: string;
    courseAmount: string;
    description: string;
    provideWhat: string;
    learnersNumber: string

  constructor(private dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.forEach(params => {
      if (params["courseMasterId"]) {
        this.courseMasterId = params["courseMasterId"];
      }
      if (params["courseName"]) {
        this.courseName = params["courseName"];
      }
      if (params["provideWhat"]) {
        this.provideWhat = params["couprovideWhat"];
      }
      if (params["description"]) {
        this.description = params["description"];
      }
      if (params["courseAmount"]) {
        this.courseAmount = params["courseAmount"];
      }
    });
    console.log(this.courseMasterId)
    console.log(this.courseName)
    console.log(this.provideWhat)
    console.log(this.description)
    console.log(this.courseAmount)
  }
  signup() {
    const dialogRef = this.dialog.open(SignupComponent, {
      height: '700px',
      width: '400px',
    });
  }

}


