import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaViewRoutingModule } from './cinema-view-routing.module';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';


@NgModule({
  imports: [
    CommonModule,
    CinemaViewRoutingModule
  ],
  declarations: [MainLayoutComponent]
})
export class CinemaViewModule { }
