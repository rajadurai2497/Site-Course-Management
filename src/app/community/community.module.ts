import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityRoutingModule } from './community-routing.module';
import { CommunityComponent } from './community.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CommunityComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommunityRoutingModule,
    SharedModule
  ],
  exports: [
    CommunityComponent
  ]
})
export class CommunityModule { }
