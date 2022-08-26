import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingListService {

  booking_list_url = environment.get_bookings_url;

  constructor(private http:HttpClient) {}

  getBookingList():Observable<any>{
    return this.http.get<any>(this.booking_list_url)
  }

}
