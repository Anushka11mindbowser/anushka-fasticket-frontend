import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingListService {

  booking_list_url = "http://127.0.0.1:8000/bookings/getBookings";

  constructor(private http:HttpClient) {}

  getBookingList():Observable<any>{
    return this.http.get<any>(this.booking_list_url)
  }

}
