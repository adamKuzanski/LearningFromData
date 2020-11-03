import { MovieAttrs } from './movieAttrs';

export class Feedback {

    constructor(movieId: number, movieRating: number) {
        this.movieId = movieId;
        this.movieRating = movieRating;
    }

    public static defaultImageUrl = `/assets/Movie-Poster-Universal.png`;
    public movieId: number;
    public movieRating: number;
}
