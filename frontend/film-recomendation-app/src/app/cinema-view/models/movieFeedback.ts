import { MovieAttrs } from './movieAttrs';

export class MovieFeedback {

    constructor(movieId: number, movieRating: number, movieWatched: boolean = false) {
        this.movieId = movieId;
        this.movieScore = movieRating;
        this.movieUnWatched = movieWatched;
    }

    public movieId: number;
    public movieScore: number;
    public movieUnWatched: boolean;
}
