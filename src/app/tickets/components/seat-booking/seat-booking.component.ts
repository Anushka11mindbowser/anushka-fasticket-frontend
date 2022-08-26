
import { Component, HostListener, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IndivisualShowsService } from '../../services/indivisual-shows.service';


@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.scss'],
  
})


export class SeatBookingComponent implements OnInit {

  movie_id:any
  selectedMovie:any
  
 

  count  =  document.getElementById('count')
  seat_quantity:any
  seat_array:any = []
  seatIndex:any =[]
  
  amount:any
 

  @HostListener('document:click', ['$event.target'])
onClick(element: HTMLElement) {
    if(element.classList.contains('col-1') ) { 
       element.classList.toggle('selected');
        this.getSelectedSeats()
    
    }
}
  
  constructor(private router:Router, private ar:ActivatedRoute, private indivisualShow: IndivisualShowsService) {
  }
  ngOnInit(): void {

   
   this.movie_id = this.ar.snapshot.params['data.id']
   this.indivisualShow.getIndivisualMovie(this.movie_id).subscribe((data)=>{
    this.selectedMovie = data.data
   })
   
   
   }
    
    getSelectedSeats(){
     const selectedSeat = document.querySelectorAll('.row .col-1.selected')
     const seats = document.querySelectorAll('.row .col-1')
     this.seat_array = Array.from(selectedSeat)
      let all_seats_array:any = []
     all_seats_array = Array.from(seats)

     
      this.seatIndex = [...this.seat_array].map(function(seat){
      return [...all_seats_array].indexOf(seat)
     })


    this.seat_quantity = selectedSeat.length 
    localStorage.setItem('ticket_no', this.seat_quantity)
    
     this.amount = 200 * this.seat_quantity
     for (let i in selectedSeat){
      this.seat_array.push(selectedSeat[i].id)
     }
     
     localStorage.setItem("seats",this.seatIndex)

     console.log(this.seatIndex)
     
  }

    goToPayment(movie:any){
      this.router.navigate(['./tickets/personal-info/' + movie.id ])
    }
 
  
  
  

}
