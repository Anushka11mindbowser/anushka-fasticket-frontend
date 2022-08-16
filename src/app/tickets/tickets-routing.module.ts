import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeatBookingComponent } from './components/seat-booking/seat-booking.component';

const routes: Routes = [
  {
    path:"book-seats", component:SeatBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
