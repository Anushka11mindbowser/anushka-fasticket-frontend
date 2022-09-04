import { Component, OnInit } from '@angular/core';

import { BookingListService } from '../../services/booking-list.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
})
export class BookingListComponent implements OnInit {
  bookingsList: any = [];
  reversedBookingList:any = []
  ticket_no:any;
  
  constructor(private bl: BookingListService) {}

  ngOnInit(): void {
    this.getAllBookings();
   
    
    
  }

  getAllBookings() {
    this.bl.getBookingList().subscribe((data) => {
      this.bookingsList = data.data;
      this.reversedBookingList = this.bookingsList.reverse()
      console.log(this.reversedBookingList)
      
    }, error=>{
          console.log("Error" + error)
    });
  }
}
