import { environment } from 'src/environments/environment'; 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndivisualShowsService } from '../../services/indivisual-shows.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

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

      this.myForm = this.fb.group({
        name: new FormControl(''),
        email: new FormControl(''),
        phone: new FormControl(''),
        show : new FormControl(this.bookedPlay.play_name),
        datetime: new FormControl('21 Aug 2022 | 17.30'),
        seat_nos: new FormControl(this.booked_seats),
       


      })
    });
  }

  submitForm(form:FormGroup){
    var formData:any = new FormData();
    formData.append('name', form.value.name)
    formData.append('email',form.value.email )
    formData.append('phone', form.value.phone)
    formData.append('show',  form.value.show)
    formData.append('datetime', form.value.show)
    formData.append('seat_nos', form.value.seat_nos)
    this.http.post( this.create_booking_url,formData).subscribe((response)=>console.log(response),
    (error)=>console.log(error))
  }
}

