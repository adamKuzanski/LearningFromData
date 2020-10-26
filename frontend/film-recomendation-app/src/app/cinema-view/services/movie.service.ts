import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  static movieProductionTime = 2000;

  constructor() { }

  public getMoviesFromDb(): Observable<Movie[]> {
    
  }


}
