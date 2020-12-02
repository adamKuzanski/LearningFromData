import { QuestionBase } from './question-base';

export class MovieQuestion extends QuestionBase<string> {
    controlType = 'movie';
}