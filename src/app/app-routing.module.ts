import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowsModule } from './shows/shows.module';

const routes: Routes = [
  {
    path:"shows", loadChildren:()=>import('./shows/shows.module').then(mod=>mod.ShowsModule)
  },
  {
    path:"dashboard", loadChildren:()=>import('./dashboard/dashboard.module').then(mod=>mod.DashboardModule)
  },
  {
    path:"tickets", loadChildren:()=>import('./tickets/tickets.module').then(mod=>mod.TicketsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
