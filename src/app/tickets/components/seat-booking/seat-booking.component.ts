  import { Component, HostListener, OnInit } from '@angular/core';
  import { Router } from '@angular/router';



@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.scss'],
  
})


export class SeatBookingComponent implements OnInit {


  count  =  document.getElementById('count')
  seat:any = []
  ticketNo = 0;

  @HostListener('document:click', ['$event.target'])
onClick(element: HTMLElement) {
    if(element.classList.contains('col-1') ) { 
       element.classList.toggle('selected');
       this.seat.push(element)
       
       console.log(this.seat)
       this.ticketNo = this.seat.length
       console.log(this.ticketNo)
    
    }
}
  
  constructor(private router:Router) {
  }
  ngOnInit(): void {
  
    
  }
 
    goToPayment(){
      this.router.navigate(['./tickets/personal-info'])
    }
 
  
  
  

}
