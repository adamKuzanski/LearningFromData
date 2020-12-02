import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaViewRoutingModule } from './cinema-view-routing.module';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecommendationMainComponent } from './components/recommendation-main/recommendation-main.component';
import { MainSimpleComponent } from './components/main-simple/main-simple.component';
import { MovieSimpleComponent } from './components/movie-simple/movie-simple.component';


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
    RecommendationMainComponent,
    MainSimpleComponent,
    MovieSimpleComponent
  ],
})
export class CinemaViewModule { }
