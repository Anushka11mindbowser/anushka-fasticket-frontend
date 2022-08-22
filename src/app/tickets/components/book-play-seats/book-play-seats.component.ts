import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IndivisualShowsService } from '../../services/indivisual-shows.service';

@Component({
  selector: 'app-book-play-seats',
  templateUrl: './book-play-seats.component.html',
  styleUrls: ['./book-play-seats.component.scss']
})
export class BookPlaySeatsComponent implements OnInit {

  play_id:any
  selectedPlay:any
  

  count  =  document.getElementById('count')
  seat_quantity:any
  seat_array:any = []
  amount:any
 

  @HostListener('document:click', ['$event.target'])
onClick(element: HTMLElement) {
    if(element.classList.contains('col-1') ) { 
       element.classList.toggle('selected');
       this.seat_array.push(element)
        this.getSelectedSeats()
        
    
    }
}
  

  constructor(private ar:ActivatedRoute, private indivisualShow:IndivisualShowsService, private router:Router) {
          
    
   }

  ngOnInit(): void {
    this.play_id = this.ar.snapshot.params['data.id']
   this.indivisualShow.getIndivisualPlay(this.play_id).subscribe((data)=>{
    this.selectedPlay = data.data
    
   })
   console.log(this.seat_quantity)
   console.log(this.seat_array)

  }

  getSelectedSeats(){
    const selectedSeat = document.querySelectorAll('.row .col-1.selected')
    const seat = document.querySelectorAll('.row .col-1.selected')
    this.seat_quantity = selectedSeat.length - 1
    this.amount = 200 * this.seat_quantity;
    localStorage.setItem('selectedSeats', this.seat_array)
  }

   goToPayment(play:any){
     this.router.navigate(['./tickets/confirm-play-booking/' + play.id ])
   }



}
