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

  constructor(private readonly communityService: CommunityService) {}

  ngOnInit(): void {
    this.addCommunity = new FormGroup({
      fullName: new FormControl(this.community.fullName, [
        Validators.required,
        Validators.minLength(4),

      ]),
      alterEgo: new FormControl(this.community.alterEgo),
      power: new FormControl(this.community.power, Validators.required)
    });
  }
  public onSubmitButtonClicked(): void {
    this.community.communityUserId = 0;
    this.communityService.createCommunity(this.community).subscribe((data) => {
      console.log('Added');
    });
  }
}
