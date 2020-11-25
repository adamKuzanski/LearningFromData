import { MovieAttrs } from './movieAttrs';

export class Movie {

    constructor(attrs: Partial<MovieAttrs> = {}) {
        this.id = attrs.id;
        this.title = attrs.title;
        this.poster_path = attrs.poster_path || Movie.defaultImageUrl;
    }

    public static defaultImageUrl = `/assets/Movie-Poster-Universal.png`;
    public id: number;
    public title: string;
    public poster_path: string;
}

// https://image.tmdb.org/t/p/original/ppd84D2i9W8jXmsyInGyihiSyqz.jpg