import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { AddSignupModel } from '../models/signup/signup.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;

    public signup = new AddSignupModel();

    constructor(private readonly  signupService: SignupService ) {}

    ngOnInit(): void {}
    public onSubmitButtonClicked(): void {
        this.signup.userId = 0;
        this.signupService.createSignup(this.signup).subscribe((data) => {
          console.log('Added');
        });
      }




}
