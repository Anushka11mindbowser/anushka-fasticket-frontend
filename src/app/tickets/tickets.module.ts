import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TicketsRoutingModule } from './tickets-routing.module';
import { SeatBookingComponent } from './components/seat-booking/seat-booking.component';
import { PersonalInfoComponent } from './components/confirm-movie-booking/personal-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookPlaySeatsComponent } from './components/book-play-seats/book-play-seats.component';
import { ConfirmPlayBookingComponent } from './components/confirm-play-booking/confirm-play-booking.component';


@NgModule({
  declarations: [
    SeatBookingComponent,
    PersonalInfoComponent,
    BookPlaySeatsComponent,
    ConfirmPlayBookingComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule, 
    ReactiveFormsModule
    
  ]
})
export class TicketsModule { }
