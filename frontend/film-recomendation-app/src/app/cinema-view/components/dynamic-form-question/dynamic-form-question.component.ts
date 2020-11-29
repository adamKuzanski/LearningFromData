import { Component, Input, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { QuestionBase } from '../../questionaire-models/question-base';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.movieID].valid; }
  public url = environment.TmdbPosterBaseUrl;
  
  constructor() { }

  ngOnInit(): void {
  }

}
