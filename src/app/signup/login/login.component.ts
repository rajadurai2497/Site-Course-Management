import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';
import { MatDialogRef } from '@angular/material/dialog';

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

  constructor(
    private readonly _signupService: SignupService,
    private readonly dialogRef: MatDialogRef<LoginComponent>,
  ) {
    this.userName = '';
    this.password = '';
  }

  ngOnInit() {}

  public login(): void {
    if (this.userName !== '' && this.password !== '') {
      this._signupService.login(this.userName, this.password).subscribe((data) => {
        if (data && data.isAuthorize) {
          this.dialogRef.close(data);
        }
      });
    }
  }
}
