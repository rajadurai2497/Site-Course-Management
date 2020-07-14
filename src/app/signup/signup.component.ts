import { Component, OnInit, Inject } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { AddSignupModel } from '../models/signup/signup.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { WindowRef } from '../services/window-ref.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CourseService } from '../services/course.service';
import { PaymentService } from '../services/payment.service';
import { NgxSpinnerService } from 'ngx-spinner';

import { ValidationService } from '../services/validation.service';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [MatDialog],
})
export class SignupComponent implements OnInit {
  // [x: string]: any;
  phoneNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  userId: number;
  city: string;
  courseId;
  test: Date = new Date();
  focus;
  focus1;
  focus2;
  allCourse;

  signup = new AddSignupModel();
  signupForm: FormGroup;
  submitted = false;
  // tslint:disable-next-line: ban-types
  showSuccessMessage: Boolean = false;
  private _courseDetailsService: any;
  addSignup: any;
  selectedCourse: any;
  name: any;
  rzp1: any;
  getlogin: any;
  orderDetails: any;

  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    private winRef: WindowRef,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialog: MatDialog,
    private readonly _signupService: SignupService,
    private readonly _courseService: CourseService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly paymentService: PaymentService,
    private SpinnerService: NgxSpinnerService,
    private readonly _validation: ValidationService,
    private formBuilder: FormBuilder,

  ) { }
  ngOnInit(): void {
    this.SpinnerService.hide();
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.courseId = queryParams['course'];
    });
    this.signupForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      passWord: ['', [Validators.required]],
      emailId: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [
        Validators.required,
        Validators.pattern(this.phoneNumberPattern),
      ]],
      city: ['', [Validators.required]],
    });
  }
  get f() { return this.signupForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }

  }
  public onSubmitButtonClicked(): void {
    this.signup.userId = 0;
    if (this.signupForm.valid) {
      this._signupService.createSignup(this.signupForm.value).then((data) => {
        this.submitted = false;
        this.signupForm.reset();
        this.showSuccessMessage = true;
        if (data && data.result) {
          this.SpinnerService.show();
          this.paymentService.insertOrder(this.courseId, data.response.access_token).subscribe((value: any) => {
            this.SpinnerService.hide();
            this.initPay(value, data.response.access_token);
          });
        } else {
          this.SpinnerService.hide();
        }
      });
    }
    else {
      this.SpinnerService.hide();
    }
  }

  login() {
    const dialogRef = this.dialog.open(LoginComponent, {
      height: 'auto',
      width: 'auto',
      panelClass: 'mat-dialogue-no-padding',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.SpinnerService.show();
        this.paymentService.insertOrder(this.courseId, result.access_token).subscribe((value: any) => {
          this.SpinnerService.hide();
          this.initPay(value, result.access_token);
        });
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  // Razor pay
  public initPay(orderDetails, access_token): void {
    const ref = this;
    const options = {
      key: orderDetails.razorKey,
      amount: orderDetails.coursePaymentData.courseAmount,
      currency: 'INR',
      order_id: orderDetails.jsonData.id,
      name: 'LURE CAP',
      prefill: {
        name: orderDetails.coursePaymentData.name,
        email: orderDetails.coursePaymentData.emailId,
        contact: orderDetails.coursePaymentData.phoneNumber,
      },
      handler: (response) => {
        const payload =
          '{Paymentid: "' +
          response.razorpay_payment_id +
          '",' +
          'Orderid: "' +
          response.razorpay_order_id +
          '",' +
          'Signature: "' +
          response.razorpay_signature +
          '"}';
        this.paymentService.verifyPayment(payload, access_token).subscribe((message: any) => {
          if (message) {
            alert('Payment completed successfully. You will be redirected to our Course Management Page');
            location.href = "https://portal.lurecapacademy.com/"
          } else {
            alert('payment failed');
          }
        });
      },
    };
    this.rzp1 = new this.winRef.nativeWindow.Razorpay(options);
    this.rzp1.open();
  }
}
