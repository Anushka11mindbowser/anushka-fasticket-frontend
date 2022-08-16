import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../../services/shows.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

  moviesList:any=[]
  playsList:any=[]

  constructor(private showService:ShowsService) { }

  ngOnInit(): void {
    this.getAllMovies()
    this.getAllPlays()
  }


  getAllMovies(){
    this.showService.getMoviesList().subscribe((data)=>{
      this.moviesList = data.data
      console.log(this.moviesList)
    })
  }

  getAllPlays(){
    this.showService.getPlaysList().subscribe((data)=>{
      this.playsList = data.data
    })
  }

}
