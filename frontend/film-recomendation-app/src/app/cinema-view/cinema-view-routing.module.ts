import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MainSimpleComponent } from './components/main-simple/main-simple.component';
import { RecommendationMainComponent } from './components/recommendation-main/recommendation-main.component';

const routes: Routes = [
  {path: 'movies-library', component: MainLayoutComponent },
  {path: 'recommendation', component: MainSimpleComponent},
  {path: '', redirectTo: 'recommendation', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CinemaViewRoutingModule { }
