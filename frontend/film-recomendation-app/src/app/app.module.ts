import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemaViewModule } from './cinema-view/cinema-view.module';
import { A2sCommModule } from 'a2s-comm';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CinemaViewModule,
    A2sCommModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


