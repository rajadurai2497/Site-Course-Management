import { Component, OnInit, Inject } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { AddSignupModel } from '../models/signup/signup.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
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

  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    // tslint:disable-next-line: variable-name
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    // tslint:disable-next-line: variable-name
    private readonly _signupService: SignupService,
  ) {}

  ngOnInit(): void {
    this.addSignup = new FormGroup({
      userName: new FormControl(this.signup.userName, [
        Validators.required,
        Validators.minLength(4),
      ]),
      passWord: new FormControl(this.signup. passWord, [
        Validators.required,
      ]),
      emailId: new FormControl(this.signup.emailId, [
        Validators.required,
        Validators.pattern(this.emailPattern),
      ]),
      phoneNumber: new FormControl(this.signup. phoneNumber, [
        Validators.required,
        Validators.pattern(this. phoneNumberPattern),
      ]),
      alterEgo: new FormControl(this.signup.alterEgo),
      power: new FormControl(this.signup.power, Validators.required)
    });
  }
  get userName() { return this.signup.get(' userName'); }
  get power() { return this.signup.get('power'); }
  get emailId() { return this.signup.get('emailId'); }
  get phoneNumber() { return this.signup.get('phoneNumber'); }
  get passWord() { return this.signup.get('passWord'); }
  public onSubmitButtonClicked(): void {
    this.signup.userId = 0;
    this._signupService.createSignup(this.signup).then((data) => {
    });
  }

  public addCourse(): void {
    const signup = {
      userId: 0,
      userName: this.userName,
      passWord: this.passWord,
      name: this.name,
      emailId: this.emailId,
      phoneNumber: this.phoneNumber,
      city: this.city,
    };
    this._courseDetailsService.addSignup(signup).then((data) => {
      if (data && data.result) {
        alert('Registered Successfully');
        this.dialogRef.close(true);
      }
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
