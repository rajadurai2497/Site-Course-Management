import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeCourseComponent } from './home-course/home-course.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SectionsComponent, HomeAboutComponent, HomeCourseComponent, HomeFeaturesComponent],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports:[ SectionsComponent ]
})
export class SectionsModule { }
