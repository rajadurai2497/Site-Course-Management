import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './signup/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule)


  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(module => module.SignupModule)
  },
  { path: 'login', component: LoginComponent },
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
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
