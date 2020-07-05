import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'angular-image-slider';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    CommunityComponent,
    QueriesComponent,
    CourseComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    CoursesModule,
    HttpClientModule,
    SliderModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
