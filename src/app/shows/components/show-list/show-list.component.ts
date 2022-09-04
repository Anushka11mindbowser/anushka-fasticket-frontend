import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ShowsService } from '../../services/shows.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss'],
})
export class ShowListComponent implements OnInit {
  moviesList: any = [];
  playsList: any = [];

  constructor(
    private showService: ShowsService,
    private ar: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllMovies();
    this.getAllPlays();
  }

  getAllMovies() {
    this.showService.getMoviesList().subscribe((data) => {
      this.moviesList = data.data;
      
      }, error =>{
        console.log("Error: " + console.log(error))
      });
    
    }

  getAllPlays() {
    this.showService.getPlaysList().subscribe((data) => {
      this.playsList = data.data;
      console.log(this.playsList)
    }, error =>{
      console.log("Error: " + console.log(error))
    });
  }

   selectMovie(movie:any){
        this.router.navigate(['tickets/book-seats' + '/' + movie.id])
   }

  selectPlay(play: any) {
    this.router.navigate(['/tickets/book-play-seats' + '/' + play.id]);
    console.log(play.id)
  }
}
