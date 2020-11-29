import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MovieService } from './cinema-view/services/movie.service';
import { User } from './shared/models/user';
import { AuthenticationService } from './shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'film-recomendation-app';
  public currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private movieService: MovieService
  )
  {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  public logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}
