import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunityModule } from './community.module';
import { CommunityComponent } from './community.component';


const routes: Routes = [{
  path: '',
  component: CommunityComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
