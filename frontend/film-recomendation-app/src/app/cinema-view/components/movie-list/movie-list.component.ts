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
    this.movieService.getMovies().subscribe({
      next: (movies) => this.movies = movies,
      error: () => alert('Nie udało się pobrać filmów')
    })
  }
}
