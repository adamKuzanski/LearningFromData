import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaViewRoutingModule } from './cinema-view-routing.module';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { RecommendationMainComponent } from './components/recommendation-main/recommendation-main.component';


@NgModule({
  imports: [
    CommonModule,
    CinemaViewRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    MainLayoutComponent,
    MovieComponent,
    MovieListComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    RecommendationMainComponent
  ],
})
export class CinemaViewModule { }
