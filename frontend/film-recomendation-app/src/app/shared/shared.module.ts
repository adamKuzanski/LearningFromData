import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AlertComponent } from './components/alert/alert.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [NavigationComponent, AlertComponent, HomeComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedRoutingModule
  ],
  exports: [
    NavigationComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ]
})
export class SharedModule { }
