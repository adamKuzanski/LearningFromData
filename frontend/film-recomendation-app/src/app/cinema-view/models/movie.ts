import { MovieAttrs } from './movieAttrs';

export class Movie {

    constructor(attrs: Partial<MovieAttrs> = {}) {
        this.id = attrs.id;
        this.title = attrs.title;
        this.imageUrl = attrs.imgUrl || Movie.defaultImageUrl;
    }

    public static defaultImageUrl = `/assets/Movie-Poster-Universal.png`;
    public id: number;
    public title: string;
    public imageUrl: string;
}
