import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IndivisualShowsService } from '../../services/indivisual-shows.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
  create_booking_url = environment.create_booking_url

  booked_seats:any =[]
 
  bookedMovie: any;
  ticket_no:any
  ticket_price:any
  id: any;
  myForm: FormGroup;
 
 

  constructor(
    private indivisualShow: IndivisualShowsService,
    private router: Router,
    private ar: ActivatedRoute,
    public fb: FormBuilder,
    private http:HttpClient,
   
  ) 
  {}

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['data.id'];
    this.indivisualShow.getIndivisualMovie(this.id).subscribe((data) => {
      this.bookedMovie = data.data;
     
      this.booked_seats = localStorage.getItem('seats');
      this.ticket_price = localStorage.getItem('amount')
      this.ticket_no = this.booked_seats.length - 1
     



      this.myForm = this.fb.group({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('',[Validators.required, Validators.email]),
        phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]\d*$/)]),
        show : new FormControl(this.bookedMovie.movie_name),
        ticket_no: new FormControl(this.ticket_no),
        ticket_price:new FormControl(this.ticket_price),
        show_date: new FormControl('Date: ' + this.bookedMovie.movie_date),
        show_time: new FormControl('Time: ' + this.bookedMovie.movie_time),
        seat_nos: new FormControl('Seats: ' + this.booked_seats),
        show_theatre: new FormControl('Theatre: ' + this.bookedMovie.movie_theatre),
        show_screen: new FormControl('Screen No: ' + this.bookedMovie.screen_no)
       


      })
      
    }, error =>{
      console.log("Error" + error)
    });
    
  }

  submitForm(form:FormGroup){
    var formData:any = new FormData();
    formData.append('name', form.value.name)
    formData.append('email',form.value.email )
    formData.append('phone', form.value.phone)
    formData.append('show',  form.value.show)
    formData.append('ticket_no', form.value.ticket_no)
    formData.append('show_date', form.value.show_date)
    formData.append('show_time', form.value.show_time)
    formData.append('seat_nos', form.value.seat_nos)
    formData.append('show_theatre', form.value.show_theatre)
    formData.append('show_screen', form.value.show_screen)
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
