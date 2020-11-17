import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { MovieFeedback } from '../../models/movieFeedback';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';
import { UserMovieRating } from '../../models/userMovieRating';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})

export class MovieListComponent implements OnInit, OnChanges {
  @Input() currentUser: User;
  alertService: any;
  loading: boolean;
  isSubmited: boolean = false;

  constructor(
    private movieService: MovieService,
    private formBuilder: FormBuilder) { }
  
    ngOnChanges(changes: SimpleChanges): void {
      console.log("Current User from child")
      console.log(this.currentUser)
  }
  
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

  public submitForm(answersArray) {

    const feadbackArray: MovieFeedback[] = [];
    for (let i = 0; i < answersArray.length; i++){
      if (typeof answersArray[i] === 'number') {
        const movieDbId = this.arrayMovies[i].id;
        const movieRating = answersArray[i];
        const feadback = new MovieFeedback(movieDbId, movieRating);
        feadbackArray.push(feadback);
      }
    }
    
    const finalFeedback = new UserMovieRating(
      this.currentUser,
      feadbackArray
    )

    console.log(JSON.stringify(finalFeedback));


    this.movieService.postUserRatings(finalFeedback)
    .subscribe(
        data => {
          console.log(data)
          this.isSubmited = true;
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });


    // console.log(JSON.stringify(feadbackArray));
  }


}
