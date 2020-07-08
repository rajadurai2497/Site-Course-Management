import { Component, OnInit } from '@angular/core';
import { AddCommunityModel } from '../models/community/community.model';
import { CommunityService } from '../services/community-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
  public community = new AddCommunityModel();
  addCommunity: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  phoneNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  dialogRef: any;
  constructor(private readonly communityService: CommunityService) {}

  ngOnInit(): void {
    this.addCommunity = new FormGroup({
      fullName: new FormControl(this.community.fullName, [
        Validators.required,
        Validators.minLength(4),
      ]),
      emailId: new FormControl(this.community.emailId, [
        Validators.required,
        Validators.pattern(this.emailPattern),
      ]),
      phoneNumber: new FormControl(this.community. phoneNumber, [
        Validators.required,
        Validators.pattern(this. phoneNumberPattern),
      ]),
    });
  }
  get fullName() { return this.community.get('fullName'); }
  get emailId() { return this.community.get('emailId'); }
  get phoneNumber() { return this.community.get('phoneNumber'); }


  public onSubmitButtonClicked(): void {
    this.community.communityUserId = 0;
    this.communityService.createCommunity(this.community).subscribe((data) => {
      if (data && data.result) {
        alert('Registered Successfully');
        } 
        else {
          
          alert('Registered UnSuccessfully');
        }
      this.dialogRef.close(true);
    });
  }
}
