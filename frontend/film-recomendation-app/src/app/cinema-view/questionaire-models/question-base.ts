export class QuestionBase<T> {
    movieID: number;
    movieTitle: string;
    moviePosterUrl: string;
    movieRating: number;
    watched: boolean;
    required: boolean;
    controlType: string;
    options: {key: string, value: string}[];
  
    constructor(options: {
        movieID?: number;
        movieTitle?: string;
        moviePosterUrl?: string;
        movieRating?: number;
        watched?: boolean;
        required?: boolean;
        controlType?: string;
        options?: {key: string, value: string}[];
      } = {}) {
          this.movieID = options.movieID;
          this.movieTitle = options.movieTitle;
          this.moviePosterUrl = options.moviePosterUrl;
          this.required = !!options.required;
          this.controlType = options.controlType || '';
          this.options = options.options || [];
    }
  }