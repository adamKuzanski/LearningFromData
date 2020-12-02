import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Movie } from '../../models/movie';
import { MovieAttrs } from '../../models/movieAttrs';
import { QuestionBase } from '../../questionaire-models/question-base';
import { MovieService } from '../../services/movie.service';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-recommendation-main',
  templateUrl: './recommendation-main.component.html',
  styleUrls: ['./recommendation-main.component.scss']
})
export class RecommendationMainComponent implements OnInit {
  public questions$: Observable<QuestionBase<any>[]>;
  arrayMovies: MovieAttrs[] = [];

  constructor(
    private question_service: QuestionService,
    private movie_service: MovieService) {
    }

  ngOnInit() {
    this.movie_service.getMovies().subscribe({
      next: (movies) => {
        this.arrayMovies = movies;
        this.addQuestions(movies);
      },
      error: () => alert('Nie udało się pobrać filmów')
    });
  }

  public addQuestions(movies: Movie[]){
    this.questions$ = this.question_service.getQuestions(movies);
  }
}
