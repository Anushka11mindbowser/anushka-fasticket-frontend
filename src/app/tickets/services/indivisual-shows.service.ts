import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndivisualShowsService {

  single_movie_url = "http://127.0.0.1:8000/shows/singleMovie"
  single_play_url = "http://127.0.0.1:8000/shows/singlePlay"
  create_booking_url = "http://127.0.0.1:8000/bookings/createBooking"



  constructor(private http:HttpClient) { }

 getIndivisualMovie(id:any):Observable<any>{
  return this.http.get(this.single_movie_url + '/' + id)
 }

 getIndivisualPlay(id:any):Observable<any>{
  return this.http.get(this.single_play_url + '/' + id)
 }

 createBooking(item:any):Observable<any>{
  return this.http.post(this.create_booking_url, item)
 }

}
