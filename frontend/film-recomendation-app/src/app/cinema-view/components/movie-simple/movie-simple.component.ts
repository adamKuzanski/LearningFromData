import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MovieRating } from '../../models/movieRating';

@Component({
  selector: 'app-movie-simple',
  templateUrl: './movie-simple.component.html',
  styleUrls: ['./movie-simple.component.scss']
})
export class MovieSimpleComponent implements OnInit {
  @Input() movieRating: MovieRating;

  public url = environment.TmdbPosterBaseUrl;

  constructor() { }

  ngOnInit(): void {
  }

  public updateInput(value: number): void {
    this.movieRating.rating = value.toString();
    // console.log("Movie Title: " + this.movieRating.movie.title + " Rating: " + this.movieRating.rating + " Watched: " + this.movieRating.watched)
  }

  public toggleChange() {
    this.movieRating.watched = !this.movieRating.watched;
    // console.log(this.movieRating.watched)
  }

}
