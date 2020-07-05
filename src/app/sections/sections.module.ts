import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeCourseComponent } from './home-course/home-course.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderModule } from 'angular-image-slider';


@NgModule({
  declarations: [SectionsComponent,  HomeAboutComponent, HomeCourseComponent, HomeFeaturesComponent,],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    FormsModule,
    NgbModule,
    SliderModule

  ],
  exports:[ SectionsComponent ]
})
export class SectionsModule { }
