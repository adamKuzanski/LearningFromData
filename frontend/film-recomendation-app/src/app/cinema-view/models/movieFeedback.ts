import { MovieAttrs } from './movieAttrs';

export class MovieFeedback {

    constructor(movieId: number, movieRating: string, movieWatched: boolean = false) {
        this.movieId = movieId;
        this.movieScore = movieRating;
        this.movieUnWatched = movieWatched;
    }

    public movieId: number;
    public movieScore: string;
    public movieUnWatched: boolean;
}
