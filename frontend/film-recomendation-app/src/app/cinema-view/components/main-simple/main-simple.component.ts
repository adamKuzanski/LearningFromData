import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { Movie } from '../../models/movie';
import { MovieAttrs } from '../../models/movieAttrs';
import { MovieFeedback } from '../../models/movieFeedback';
import { MovieRating } from '../../models/movieRating';
import { UserMovieRating } from '../../models/userMovieRating';
import { MovieService } from '../../services/movie.service';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-main-simple',
  templateUrl: './main-simple.component.html',
  styleUrls: ['./main-simple.component.scss']
})
export class MainSimpleComponent implements OnInit {
  public ratingList: MovieRating[] = [];
  public movieArray: MovieAttrs[] = []
  public isError: boolean = false;
  public errorMessage: string[] = [];
  public isMessage: boolean = false;
  public message: string = '';
  public currentUser: User;


  constructor(
    private question_service: QuestionService,
    private movie_service: MovieService) {
    }

  ngOnInit() {
    this.movie_service.getMovies().subscribe({
      next: (movies) => {
        this.movieArray = movies;
        this.createRatingList(movies);
      },
      error: () => alert('Nie udało się pobrać filmów')
    });
    this.currentUser =  JSON.parse(localStorage.getItem('user'))
  }

  public createRatingList(movies: Movie[]){
    for (let movie of movies) {
      const movieRating = new MovieRating(movie, false, "0");
      this.ratingList.push(movieRating)
    }
  }

  public submit(){
    this.isError = false;
    this.errorMessage = [];
    for(let rating of this.ratingList) {
      if((rating.rating == "0") && (rating.watched == false)) {
        this.isError = true;
        this.errorMessage.push("You did not rate movie: " + rating.movie.title)
      }
    }

    if(this.isError) {
      this.isMessage = true;
      this.message = "Errors shown on top of the page"
      return;
    }

    let feedbackArray: MovieFeedback[] = [];
    for(let rating of this.ratingList) {
      const feedback = new MovieFeedback(
        rating.movie.id,
        rating.rating,
        rating.watched
      )
      feedbackArray.push(feedback);
    }

    const userMovieRating = new UserMovieRating(
      this.currentUser,
      feedbackArray
    )

    console.log(JSON.stringify(userMovieRating));

    this.movie_service.postUserRatings(userMovieRating)
    .subscribe(
      data => {
        // console.log(data)
        this.isError = true;
      },
      error => {
        this.isError = false;
        this.isMessage = true;
        this.message = "Error while sending data";
        this.errorMessage = error;
      });

  }

  public saveProgress() {
    console.log("Saving...")
    this.isMessage = true;
    this.message = "Service currently unavailable"
  }
}
