import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { interval, Observable, Subject, Subscriber } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SubSink } from 'subsink';
import { Movie } from '../models/movie';
import { MovieAttrs } from '../models/movieAttrs';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements OnDestroy {
  constructor(private _http: HttpClient) {
  }

  public getMovies(): Observable<Movie[]> {
    return this._http.get<MovieAttrs[]>(`${environment.apiUrl}/movies`).pipe(
      map(
        (data) => data.map((movieAttrs) => new Movie(movieAttrs))
      )
    )
  }

  public ngOnDestroy(): void {
  }

}
