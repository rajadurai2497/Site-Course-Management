import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { CommunityComponent } from './community/community.component';
import { QueriesComponent } from './queries/queries.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseComponent } from './course/course.component';
import { CoursesModule } from './courses/courses.module';
import { HttpClientModule } from '@angular/common/http';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    CommunityComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    CommonModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
