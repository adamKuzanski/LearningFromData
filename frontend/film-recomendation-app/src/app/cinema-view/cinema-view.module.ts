import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaViewRoutingModule } from './cinema-view-routing.module';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    CinemaViewRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    MainLayoutComponent,
    MovieComponent,
    MovieListComponent
  ],
})
export class CinemaViewModule { }
