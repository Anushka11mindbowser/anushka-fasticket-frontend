import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BookPlaySeatsComponent } from './components/book-play-seats/book-play-seats.component';
import { ConfirmPlayBookingComponent } from './components/confirm-play-booking/confirm-play-booking.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { SeatBookingComponent } from './components/seat-booking/seat-booking.component';

const routes: Routes = [
  {
    path:"book-seats/:data.id", component:SeatBookingComponent,
   
  },
  {
    path:"personal-info/:data.id", component:PersonalInfoComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"book-play-seats/:data.id", component:BookPlaySeatsComponent,
    

  },
  {
    path:"confirm-play-booking/:data.id", component:ConfirmPlayBookingComponent,
    canActivate:[AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
