import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersComponent } from './partners/partners.component';



@NgModule({
  declarations: [PartnersComponent],
  imports: [
    CommonModule
  ],
  exports:[PartnersComponent]
})
export class SharedModule { }
