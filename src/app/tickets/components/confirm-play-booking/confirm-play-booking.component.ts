import { environment } from 'src/environments/environment'; 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndivisualShowsService } from '../../services/indivisual-shows.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirm-play-booking',
  templateUrl: './confirm-play-booking.component.html',
  styleUrls: ['./confirm-play-booking.component.scss'],
})
export class ConfirmPlayBookingComponent implements OnInit {
  create_booking_url = environment.create_booking_url
  booked_seats:any =[]
  bookedPlay: any;
  id: any;
  tickets_no:any
  ticket_price:any
  myForm: FormGroup;

  constructor(
    private ar: ActivatedRoute,
    private router: Router,
    private indivisualShow: IndivisualShowsService,
    private http: HttpClient,
    public fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['data.id'];
    this.indivisualShow.getIndivisualPlay(this.id).subscribe((data) => {
      this.bookedPlay = data.data;

      this.booked_seats = localStorage.getItem('seats');
      this.tickets_no = localStorage.getItem('ticket_no')
      this.ticket_price = localStorage.getItem('ticket_price')
      console.log(this.ticket_price)

      this.myForm = this.fb.group({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.minLength(10), Validators.maxLength(10)]),
        show : new FormControl(this.bookedPlay.play_name),
        show_date: new FormControl(this.bookedPlay.play_date),
        show_time: new FormControl(this.bookedPlay.play_time),
        seat_nos: new FormControl(this.booked_seats),
        show_theatre: new FormControl(this.bookedPlay.play_theatre),
        screen_no: new FormControl(this.bookedPlay.stage_no),
        ticket_no: new FormControl(this.tickets_no),
        ticket_price: new FormControl(this.ticket_price)


        
        
       


      })
      console.log(this.bookedPlay)
    }, error=>{
      console.log("Error" + error)
    });
  }

  submitForm(form:FormGroup){
    var formData:any = new FormData();
    formData.append('name', form.value.name)
    formData.append('email',form.value.email )
    formData.append('phone', form.value.phone)
    formData.append('show',  form.value.show)
    formData.append('show_date', form.value.show_date),
    formData.append('show_time', form.value.show_time),
    formData.append('seat_nos', form.value.seat_nos)
    formData.append('show_theatre',form.value.show_theatre)
    formData.append('screen_no', form.value.screen_no)
    formData.append('ticket_no', form.value.ticket_no)
    formData.append('ticket_price', form.value.ticket_price)
    this.http.post( this.create_booking_url,formData).subscribe((response)=>console.log(response),
    (error)=>console.log(error))
  }
  get name(){
    console.log(this.myForm.get('name'))
    return this.myForm.get('name')
    
  }

  get email(){
    return this.myForm.get('email')
  }

  get phone(){
    return this.myForm.get('phone')
  }
}

