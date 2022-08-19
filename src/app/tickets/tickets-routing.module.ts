import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPlaySeatsComponent } from './components/book-play-seats/book-play-seats.component';
import { ConfirmPlayBookingComponent } from './components/confirm-play-booking/confirm-play-booking.component';
import { PersonalInfoComponent } from './components/confirm-movie-booking/personal-info.component';
import { SeatBookingComponent } from './components/seat-booking/seat-booking.component';

const routes: Routes = [
  {
    path:"book-seats/:data.id", component:SeatBookingComponent
  },
  {
    path:"personal-info/:data.id", component:PersonalInfoComponent
  },
  {
    path:"book-play-seats/:data.id", component:BookPlaySeatsComponent

  },
  {
    path:"confirm-play-booking/:data.id", component:ConfirmPlayBookingComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
