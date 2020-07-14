import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  isBusy: boolean;
  isInvalidCredentials: boolean;
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private readonly _signupService: SignupService,
    private formBuilder: FormBuilder,
    private readonly dialogRef: MatDialogRef<LoginComponent>,
  ) {
    this.userName = '';
    this.password = '';
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required ]],
      password: ['', [Validators.required]],
    });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
  }

  public login(): void {
    if(this.loginForm.valid){
      this._signupService.login(this.loginForm.controls.userName.value, this.loginForm.controls.password.value).subscribe((data) => {
        if (data && data.isAuthorize) {
          this.dialogRef.close(data);
        }
      });
    }
  }
}
