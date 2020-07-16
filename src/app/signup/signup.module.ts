import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatSnackBarModule
  ],
  providers:[NgxSpinnerService]
})
export class SignupModule { }
