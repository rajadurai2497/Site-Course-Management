import { Component, OnInit } from '@angular/core';
import { AddCommunity } from '../models/community/community.model';
import { CommunityService } from '../services/community-service.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
  community = new AddCommunity();
  communityForm: FormGroup;
  submitted = false;
  // tslint:disable-next-line: ban-types
  showSuccessMessage: Boolean = false;
  phoneNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  dialogRef: any;
  constructor(private readonly _communityService: CommunityService,
     private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.communityForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      emailId: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(this.phoneNumberPattern)]],
    });
  }
  get f() {
    return this.communityForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.communityForm.invalid) {
      return;
    }
    this.communityForm.reset();
  }
  createCommunity() {
    if (this.communityForm.valid) {
      this._communityService.createCommunity(this.communityForm.value).then((data) => {
        this.communityForm.reset();
        this.showSuccessMessage = true;
      });
    }
  }
}
