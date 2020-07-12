import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueriesRoutingModule } from './queries-routing.module';
import { QueriesComponent } from './queries.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [QueriesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QueriesRoutingModule
  ]
})
export class QueriesModule { }
