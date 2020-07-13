import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, Validators } from '@angular/forms';

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
  formBuilder: any;
  constructor(
    private readonly _signupService: SignupService,
    private readonly dialogRef: MatDialogRef<LoginComponent>,
  ) {
    this.userName = '';
    this.password = '';
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, ]],
      password: ['', [Validators.required, ]],
    });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    this.loginForm.reset();
  }

  public login(): void {
    if (this.userName !== '' && this.password !== '') {
      this._signupService.login(this.userName, this.password).subscribe((data) => {
        if (data && data.isAuthorize) {
          this.dialogRef.close(data);
          // afterClosed()
        }
      });
    }
  }
}
