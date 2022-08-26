import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  movie_list_url = environment.movies_list_url
  plays_list_url = environment.plays_list_url
  
  

  constructor(private http:HttpClient) { }

  getMoviesList():Observable<any>{
    return this.http.get<any>(this.movie_list_url)
  }

  getPlaysList():Observable<any>{
    return this.http.get<any>(this.plays_list_url)
  }

 
}
