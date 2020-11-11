import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users = [];

  constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService
  ) {
      this.currentUser = this.authenticationService.currentUserValue;
  }

  public ngOnInit(): void {
      this.loadAllUsers();
  }

  public deleteUser(id: number): void {
      this.userService.delete(id)
          .pipe(first())
          .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers(): void {
      this.userService.getAll()
          .pipe(first())
          .subscribe(users => this.users = users);
  }
}
