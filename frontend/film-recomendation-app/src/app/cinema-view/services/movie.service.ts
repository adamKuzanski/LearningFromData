import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { interval, Observable, Subject, Subscriber } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SubSink } from 'subsink';
import { Movie } from '../models/movie';
import { MovieAttrs } from '../models/movieAttrs';
import { UserMovieRating } from '../models/userMovieRating';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements OnDestroy {
  constructor(private _http: HttpClient) {
  }

  public getMovies(): Observable<Movie[]> {
    return this._http.get<MovieAttrs[]>(`${environment.apiUrl}/movies/allMovies`).pipe(
      map(
        (data) => data.map((movieAttrs) => new Movie(movieAttrs))
      )
    )
  }

  public postUserRatings(userFinalFeedback: UserMovieRating): Observable<any> {
    return this._http.post<any>(`${environment.apiUrl}/movies/rateMovies`, userFinalFeedback)
    .pipe(map(response => {
        console.log(response)
        return response;
    }));
  }

  public ngOnDestroy(): void {
  }

}
