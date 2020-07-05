import { Component, OnInit, Input } from '@angular/core';
import { AllCourse } from 'src/app/models/course/course.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  @Input() course:AllCourse;
  constructor(private readonly _courseService:CourseService) { }

  ngOnInit() {
    console.log(this._courseService.currentCourse)
  }

}
