import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndivisualShowsService } from '../../services/indivisual-shows.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-confirm-play-booking',
  templateUrl: './confirm-play-booking.component.html',
  styleUrls: ['./confirm-play-booking.component.scss'],
})
export class ConfirmPlayBookingComponent implements OnInit {
  booked_seats: any = localStorage.getItem('selectedSeats');
  bookedPlay: any;
  id: any;
  form: FormGroup;

  constructor(
    private ar: ActivatedRoute,
    private router: Router,
    private indivisualShow: IndivisualShowsService,
    private http: HttpClient,
    public fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      movie: [''],
      datetime: [''],
      seat_no: [''],
    });
  }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['data.id'];
    this.indivisualShow.getIndivisualPlay(this.id).subscribe((data) => {
      this.bookedPlay = data.data;
    });
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append('name', this.form.get('name')?.value);
    formData.append('email', this.form.get('email')?.value);
    formData.append('phone', this.form.get('phone')?.value);
    formData.append('movie', this.form.get('movie')?.value);
    formData.append('datetime', this.form.get('datetime')?.value);
    formData.append('seat_no', this.form.get('seat_no')?.value);
    this.http
      .post('http://127.0.0.1:8000/bookings/createBooking', formData)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
