import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IndivisualShowsService } from '../../services/indivisual-shows.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
  booked_seats: any = localStorage.getItem('selectedSeats');
  bookedMovie: any;
  id: any;

  form: FormGroup;

  constructor(
    private indivisualShow: IndivisualShowsService,
    private router: Router,
    private ar: ActivatedRoute,
    public fb: FormBuilder,
    private http:HttpClient
  ) {
    this.form =this.fb.group({
      name: [''],
      email:[''],
      phone:[''],
      movie:[''],
      datetime:[''],
      seat_no:['']

    })
  }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['data.id'];
    this.indivisualShow.getIndivisualMovie(this.id).subscribe((data) => {
      this.bookedMovie = data.data;
    });
  }

  submitForm(){
    var formData:any = new FormData();
    formData.append('name', this.form.get('name')?.value)
    formData.append('email', this.form.get('email')?.value)
    formData.append('phone', this.form.get('phone')?.value)
    formData.append('movie', this.form.get('movie')?.value)
    formData.append('datetime', this.form.get('datetime')?.value)
    formData.append('seat_no', this.form.get('seat_no')?.value)
    this.http.post("http://127.0.0.1:8000/bookings/createBooking",formData).subscribe((response)=>console.log(response),
    (error)=>console.log(error))
  }
}
