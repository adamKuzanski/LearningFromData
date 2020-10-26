import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  constructor(private movieService: MovieService) { }
  movies: Movie[] = [];

  ngOnInit(): void {
    this.movies.push(new Movie(1, 'Shreck 1', './assets/Movie-Poster-Universal.png'));
    this.movies.push(new Movie(2, 'Die Hard', './assets/Movie-Poster-Universal.png'));
    this.movies.push(new Movie(3, 'Eagle Two - Przez Pustynię Australii', './assets/Movie-Poster-Universal.png'));
  }

  loadListOfMovies(): void {
    // this.movieService.getMoviesFromDb()
  }

  // loadMovies(): void{
  //   this.isLoading = true;
  //   this.movieService.produceMovies()
  //   .subscribe({
  //     next: (movie) => this.movies.push(movie),
  //     complete: () => this.isLoading = false
  //   });
  // }

}
