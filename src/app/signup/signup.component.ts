import { Component, OnInit, Inject } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { AddSignupModel } from '../models/signup/signup.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WindowRef } from '../services/window-ref.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginComponent } from './login/login.component';
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
  [x: string]: any;
  phoneNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  userId: number;
  city: string;

  test: Date = new Date();
  focus;
  focus1;
  focus2;

  public signup = new AddSignupModel();
  // tslint:disable-next-line: variable-name
  private _courseDetailsService: any;
  addSignup: any;
  name: any;
  rzp1: any;
  getlogin: any;

  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    // tslint:disable-next-line: variable-name
    private winRef: WindowRef,
    private readonly router: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialog: MatDialog,
    // tslint:disable-next-line: variable-name
    private readonly _signupService: SignupService,
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.addSignup = new FormGroup({
      userName: new FormControl(this.signup.userName, [Validators.required, Validators.minLength(4)]),
      passWord: new FormControl(this.signup.passWord, [Validators.required]),
      emailId: new FormControl(this.signup.emailId, [Validators.required, Validators.pattern(this.emailPattern)]),
      phoneNumber: new FormControl(this.signup.phoneNumber, [
        Validators.required,
        Validators.pattern(this.phoneNumberPattern),
      ]),
    });
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
    this.signup.userId = 0;
    this._signupService.createSignup(this.signup).then((data) => {
      if (data && data.result) {
        this.initPay();
      } else {
        alert(data.errorDetails);
      }
    });
  }

  login() {
    const dialogRef = this.dialog.open(LoginComponent, {
      height: '500px',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getlogin();
      }
    });

    this._courseDetailsService.addSignup(this.signup).then((data) => {
      if (data && data.result) {
        alert('Registered Successfully');
        this.dialogRef.close(true);
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // Razor pay

  public initPay(): void {
    console.log('Course Amount' + this.courseAmount);
    const ref = this;
    const options = {
      key: 'rzp_live_hWFxIpBogfM8X2',
      amount: this.courseAmount * 100,
      name: 'LURE CAP',
      handler: (response) => {
        ref.handlePayment(response);
      },
    };

    this.rzp1 = new this.winRef.nativeWindow.Razorpay(options);
    this.rzp1.open();
  }

  public handlePayment(response): void {
    if (response.razorpay_payment_id) {
      alert('payment Success');
      window.open('https://lurecapacademy-admin.netlify.app/', '_blank');
    } else {
      alert('payment Failed, Please Try Again Later');
    }
  }
}
