import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ShowListComponent } from './components/show-list/show-list.component';

const routes: Routes = [
  {
    path:"showsList", component:ShowListComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowsRoutingModule { }
