import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  movie_list_url = "http://127.0.0.1:8000/shows/moviesList"
  plays_list_url = "http://127.0.0.1:8000/shows/playsList"
  
  

  constructor(private http:HttpClient) { }

  getMoviesList():Observable<any>{
    return this.http.get<any>(this.movie_list_url)
  }

  getPlaysList():Observable<any>{
    return this.http.get<any>(this.plays_list_url)
  }

 
}
