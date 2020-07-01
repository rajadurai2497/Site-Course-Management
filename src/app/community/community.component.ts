import { Component, OnInit } from '@angular/core';
import { AddCommunityModel } from '../models/community/community.model';
import { CommunityService } from '../services/community-service.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
  public community = new AddCommunityModel();

  constructor(private readonly communityService: CommunityService) {}

  ngOnInit(): void {}
  public onSubmitButtonClicked(): void {
    this.community.communityUserId = 0;
    this.communityService.createCommunity(this.community).subscribe((data) => {
      console.log('Added');
    });
  }
}
