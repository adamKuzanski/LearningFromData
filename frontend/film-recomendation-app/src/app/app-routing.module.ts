import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'recommendation', loadChildren: 'src/app/cinema-view/cinema-view.module#CinemaViewModule'},
  {path: '', redirectTo: 'recommendation', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
