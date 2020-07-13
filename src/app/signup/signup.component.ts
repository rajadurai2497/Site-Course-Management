import { Component, OnInit, Inject } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { AddSignupModel } from '../models/signup/signup.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WindowRef } from '../services/window-ref.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CourseService } from '../services/course.service';
import { PaymentService } from '../services/payment.service';
import { NgxSpinnerService } from "ngx-spinner";

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
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
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

  public signup = new AddSignupModel();
  // tslint:disable-next-line: variable-name
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

  ) { }
  ngOnInit(): void {
    this.SpinnerService.hide()
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.courseId = queryParams['course'];
    });
    this.addSignup = new FormGroup({
      userName: new FormControl(this.signup.userName, [Validators.required, Validators.minLength(4)]),
      passWord: new FormControl(this.signup.passWord, [Validators.required]),
      emailId: new FormControl(this.signup.emailId, [Validators.required, Validators.pattern(this.emailPattern)]),
      phoneNumber: new FormControl(this.signup.phoneNumber, [
        Validators.required,
        Validators.pattern(this.phoneNumberPattern),
      ]),
    });


    // this.login
  }
  get userName() {
    return this.signup.get(' userName');
  }
  get emailId() {
    return this.signup.get('emailId');
  }
  get phoneNumber() {
    return this.signup.get('phoneNumber');
  }
  get passWord() {
    return this.signup.get('passWord');
  }
  public onSubmitButtonClicked(): void {
    // this.SpinnerService.show();
    this.signup.userId = 0;
    if (this.validationSignup()) {
      this._signupService.createSignup(this.signup).then((data) => {
        if (data && data.result) {
          alert('Account Created Successfully. Please Log in Here')
          this.login()
          this.SpinnerService.hide();
        } else {
          this.SpinnerService.hide();
          alert(data.errorDetails);
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
        console.log(this.courseId)
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
            alert('Payment Success');
          } else {
            alert('payment failed');
          }
        });
      },
    };
    this.rzp1 = new this.winRef.nativeWindow.Razorpay(options);
    this.rzp1.open();
  }
  validationSignup() {
    if (!this.signup.userName) {
      alert('Field Empty');
      return false;
    }
    if (!this.signup.passWord) {
      alert('Field Empty');
      return false;
    }
    if (!this.signup.emailId) {
      alert('Email Address Field Empty');
      return false;
    }
    if (!this._validation.isEmailId(this.signup.emailId)) {
      alert('Invalid Email Address');
      return false;
    }
    if (!this.signup.phoneNumber) {
      alert('Field Empty');
      return false;
    }
    return true;


  }
}
