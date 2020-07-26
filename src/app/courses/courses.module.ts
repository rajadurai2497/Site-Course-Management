import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseService } from '../services/course.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CoursesComponent, CourseDetailsComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ],
  providers:[CourseService]
})
export class CoursesModule { }

