import { Movie } from './movie';

export class MovieRating {
    public movie: Movie;
    public watched: boolean;
    public rating: number;

    constructor(movie: Movie, watched: boolean = false, rating: number = 0) {
        this.movie = movie;
        this.watched = watched;
        this.rating = rating;
    }
}