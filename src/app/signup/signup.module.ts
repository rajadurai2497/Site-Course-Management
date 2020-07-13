import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { NgxSpinnerModule } from "ngx-spinner"; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SignupRoutingModule,
    NgxSpinnerModule
  ]
})
export class SignupModule { }
