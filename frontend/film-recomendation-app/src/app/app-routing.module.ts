import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/helpers/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'authentication', pathMatch: 'full'},
  // {path: 'login', loadChildren: () => import(`./shared/shared.module`).then(m => m.SharedModule)},
  {path: 'authentication', loadChildren: 'src/app/shared/shared.module#SharedModule'},
  {path: 'recommendation', loadChildren: 'src/app/cinema-view/cinema-view.module#CinemaViewModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
