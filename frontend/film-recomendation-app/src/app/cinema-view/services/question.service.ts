import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';
import { MovieAttrs } from '../models/movieAttrs';
import { QuestionBase } from '../questionaire-models/question-base';
import { MovieQuestion } from '../questionaire-models/question-movie';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService{
  private _moviesArray: Movie[] = [];

  constructor(
    private _http: HttpClient,
    private _movie_service: MovieService)
    {
      this._moviesArray = this._movie_service.arrayMovies;
    }

  public getQuestions(movies: Movie[]): Observable<QuestionBase<string>[]> {
    console.log(movies)
    const questions: QuestionBase<string>[] = []

    for (let movie of movies) {
      const movieQuest = new MovieQuestion({
        movieID: movie.id,
        movieTitle: movie.title,
        moviePosterUrl: movie.poster_path,
        watched: false
      })
      questions.push(movieQuest)
    }

    return of(questions.sort((a, b) => a.movieID - b.movieID));
  }

}
