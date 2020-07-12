import { Component, OnInit } from '@angular/core';
import { AddCommunityModel } from '../models/community/community.model';
import { CommunityService } from '../services/community-service.service';
import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
  public community = new AddCommunityModel();
  addCommunity: FormGroup;
  submitted = false;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  phoneNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  constructor(private readonly communityService: CommunityService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addCommunity = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      emailId: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      phoneNumber: ['', [Validators.required,
        Validators.pattern(this.phoneNumberPattern), ]
      ],
    });
  }
  get fullName() { return this.community.get('fullName'); }
  get emailId() { return this.community.get('emailId'); }
  get phoneNumber() { return this.community.get('phoneNumber'); }
  public onSubmitButtonClicked(): void {
    this.community.communityUserId = 0;
    this.submitted = true;
    console.log('community');
        // stop here if form is invalid
    if (this.addCommunity.invalid) {
            return;
        }
  }
  onReset() {
    this.submitted = false;
}
  }

