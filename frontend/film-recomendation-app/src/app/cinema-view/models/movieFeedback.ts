import { MovieAttrs } from './movieAttrs';

export class MovieFeedback {

    constructor(movieId: number, movieRating: number) {
        this.movieId = movieId;
        this.movieScore = movieRating;
    }

    public movieId: number;
    public movieScore: number;
}
