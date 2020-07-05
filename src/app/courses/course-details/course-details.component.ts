import { Component, OnInit } from '@angular/core';
import { SignupComponent } from 'src/app/signup/signup.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  signup() {
    const dialogRef = this.dialog.open(SignupComponent, {
      height: '700px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAddSignup();
      }
    });
  }
  getAddSignup() {
    throw new Error('Method not implemented.');
  }
}


