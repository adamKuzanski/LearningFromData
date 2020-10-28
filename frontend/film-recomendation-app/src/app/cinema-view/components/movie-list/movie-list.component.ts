import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})

export class MovieListComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private formBuilder: FormBuilder) { }
  
  arrayMovies: Movie[] = [];

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      demoArray: this.formBuilder.array([
        this.formBuilder.control('')
      ])
    });

    this.movieService.getMovies().subscribe({
      next: (movies) => {
        this.arrayMovies = movies;
        this.addMovies(movies);
      },
      error: () => alert('Nie udało się pobrać filmów')
    });
  }

  get demoArray() {
    return this.form.get('demoArray') as FormArray;
  }

  public addMovies(movies: Movie[]) {
    movies.forEach(() => this.demoArray.push(this.formBuilder.control(false)));
  }

  public updateCheckboxes(): void {
    this.arrayMovies.forEach(() => this.demoArray.push(this.formBuilder.control(false)) );
  }

  public submitForm(formValue) {
    console.log(formValue);
  }

}
