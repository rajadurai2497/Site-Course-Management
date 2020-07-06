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
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule)


  },
  { path: 'signup', component: SignupComponent },
  {
    path: 'About-us',
    loadChildren: () => import('./about-us/about-us.module').then(module => module.AboutUsModule)
  },
  {
    path: 'Community',
    loadChildren: () => import('./community/community.module').then(module => module.CommunityModule)
  },
  {
    path: 'Queries',
    loadChildren: () => import('./queries/queries.module').then(module => module.QueriesModule)
  },
  {
    path: 'Course',
    loadChildren: () => import('./course/course.module').then(module => module.CourseModule)
  },
  {
    path: 'course-details',
    loadChildren: () => import('./courses/courses.module').then(module => module.CoursesModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then(module => module.PrivacyPolicyModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./terms-conditions/terms-conditions.module').then(module => module.TermsConditionsModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
