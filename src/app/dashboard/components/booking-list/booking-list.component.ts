import { Component, OnInit } from '@angular/core';
import { BookingListService } from '../../services/booking-list.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {

  bookingsList:any =[]
  constructor(private bl: BookingListService) { }

  ngOnInit(): void {
    this.getAllBookings()
  }

  getAllBookings(){
    this.bl.getBookingList().subscribe((data)=>{
      this.bookingsList = data.data
      console.log(this.bookingsList)
    })
  }

}
