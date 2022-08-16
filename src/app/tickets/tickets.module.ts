import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { SeatBookingComponent } from './components/seat-booking/seat-booking.component';


@NgModule({
  declarations: [
    SeatBookingComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule
  ]
})
export class TicketsModule { }
