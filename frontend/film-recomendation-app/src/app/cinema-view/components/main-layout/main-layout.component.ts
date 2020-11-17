import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  public currentUser: User;

  ngOnInit(): void {
    this.currentUser =  JSON.parse(localStorage.getItem('user'))
  }

}
