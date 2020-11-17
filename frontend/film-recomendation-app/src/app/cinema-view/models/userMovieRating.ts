import { User } from 'src/app/shared/models/user';
import { MovieFeedback } from './movieFeedback';

export class UserMovieRating {

    constructor(user: User, userFeedback: MovieFeedback[]) {
        this.authenticationUser = user;
        this.movieRatings = userFeedback;
    }

    public authenticationUser: User;
    public movieRatings: MovieFeedback[];
}
