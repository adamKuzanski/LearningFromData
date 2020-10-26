export class Movie {
    id: number;
    title: string;
    imageUrl: string;

    constructor(id: number, title: string, imageUrl: string = './assets/Movie-Poster-Universal.png') {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
    }
}
