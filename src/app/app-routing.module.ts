import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AboutUsComponent } from './about-us/about-us.component';
import { CommunityComponent } from './community/community.component';
import { QueriesComponent } from './queries/queries.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';


const routes: Routes = [
  { path: 'home',             component: HomeComponent },
  { path: 'About-us',             component: AboutUsComponent },
  { path: 'Community',             component: CommunityComponent },
  { path: 'register',           component: SignupComponent },
  { path: 'Queries',          component: QueriesComponent },
  { path: 'Course',          component: CourseComponent },
  { path: 'course-details',          component: CourseDetailsComponent },
  { path: 'privacy-policy',          component: PrivacyPolicyComponent },
  { path: 'terms-conditions',          component: TermsConditionsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
