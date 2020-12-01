import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '../questionaire-models/question-base';

@Injectable({
  providedIn: 'root'
})
export class QuestionControllService {

  constructor() { }

  toFormGroup(questions: QuestionBase<string>[]) {
    const group: any = {};

    questions.forEach(question => {
      group[question.movieID] = question.required ? new FormControl(question.movieID || "", Validators.required)
                                              : new FormControl(question.movieID || "");
    })

    return new FormGroup(group);
  }
}
