import {Component, Input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {QuestionBase} from '../../question-base';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';

@Component({
  standalone: true,
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  imports: [CommonModule, ReactiveFormsModule, NgZorroAntdModule],
})
export class DynamicFormQuestionComponent {
  @Input() question!: QuestionBase;
  @Input() form!: FormGroup;
  get isValid() {
    return this.form.controls[this.question.name].valid;
  }
}

