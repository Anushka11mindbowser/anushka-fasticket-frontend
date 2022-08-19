import { Component, HostListener, OnInit } from '@angular/core';
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
  
  play_id:any
  selectedPlay:any

  count  =  document.getElementById('count')
  seat_quantity:any
  seat_array:any = []
 

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
     const seat = document.querySelectorAll('.row .col-1.selected')
     
     
     this.seat_quantity = selectedSeat.length - 1
     console.log(this.seat_array)
     
     
     console.log(selectedSeat)
     localStorage.setItem('selectedSeats', this.seat_array)
    
    

          }

    goToPayment(movie:any){
      this.router.navigate(['./tickets/personal-info/' + movie.id ])
    }
 
  
  
  

}
