import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityRoutingModule } from './community-routing.module';
import { CommunityComponent } from './community.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CommunityComponent],
  imports: [
    CommonModule,
    FormsModule,
    CommunityRoutingModule
  ],
  exports: [
    CommunityComponent
  ]
})
export class CommunityModule { }
