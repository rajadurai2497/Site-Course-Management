import { Component, OnInit, Inject } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { AddSignupModel } from '../models/signup/signup.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
    animal: string;
    name: string;
  }
  

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    userId: number;
    userName: string;
    passWord: string;
    name: string;
    emailId: string;
    phoneNumber: string;
    city: string;

  


    test : Date = new Date();
    focus;
    focus1;
    focus2;

    public signup = new AddSignupModel();
    // tslint:disable-next-line: variable-name
    private _courseDetailsService: any;

    constructor(public dialogRef: MatDialogRef<SignupComponent>,
        // tslint:disable-next-line: variable-name
                @Inject(MAT_DIALOG_DATA) public data: DialogData, private readonly _signupService: SignupService) { }

    ngOnInit(): void {}
    public onSubmitButtonClicked(): void {
        this.signup.userId = 0;
        this._signupService.createSignup(this.signup).subscribe((data) => {
          console.log('Added');
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
            city: this.city
        }
        this._courseDetailsService.addSignup(signup).then((data) => {
          if (data && data.result) {
            this.dialogRef.close(true);
          }
        });
      }
      onNoClick(): void {
        this.dialogRef.close();
      }


}
