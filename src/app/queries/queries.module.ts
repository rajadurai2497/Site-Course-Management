import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueriesRoutingModule } from './queries-routing.module';
import { QueriesComponent } from './queries.component';


@NgModule({
  declarations: [QueriesComponent],
  imports: [
    CommonModule,
    QueriesRoutingModule
  ]
})
export class QueriesModule { }
