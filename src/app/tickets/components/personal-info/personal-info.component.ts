import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IndivisualShowsService } from '../../services/indivisual-shows.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
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
  tickets_no:any
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
      this.tickets_no = this.booked_seats.length - 1
      console.log(this.tickets_no)



      this.myForm = this.fb.group({
        name: new FormControl(''),
        email: new FormControl(''),
        phone: new FormControl(''),
        show : new FormControl(this.bookedMovie.movie_name),
        tickets_no: new FormControl(this.tickets_no),
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
    formData.append('tickets_no', form.value.tickets_no)
    formData.append('datetime', form.value.show)
    formData.append('seat_nos', form.value.seat_nos)
    this.http.post( this.create_booking_url,formData).subscribe((response)=>console.log(response),
    (error)=>console.log(error))
  }
}
