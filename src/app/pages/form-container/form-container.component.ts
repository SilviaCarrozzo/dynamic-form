import {Component, Input, NO_ERRORS_SCHEMA, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';

import {QuestionBase} from '../../question-base';
import {QuestionControlService} from 'src/app/_services/question-control.service';
import { DynamicFormQuestionComponent } from '../dynamic-form-question/dynamic-form-question.component';
import {DynamicFormComponent} from 'src/app/components/dynamic-form/dynamic-form.component';
import { QuestionService } from 'src/app/_services/question.service';
import { Validators } from "@angular/forms";

import { FieldConfig } from 'src/app/field.interface';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';


@Component({
  standalone: true,
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  providers: [QuestionControlService],
  imports: [CommonModule, DynamicFormQuestionComponent, ReactiveFormsModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FormContainerComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form!: DynamicFormComponent;
  regConfig: FieldConfig[] = [
    {
      type: "input",
      label: "Username",
      inputType: "text",
      name: "name",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "Email Address",
      inputType: "email",
      name: "email",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Email Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern(
          "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          ),
          message: "Invalid email"
        }
      ]
    },
    {
      type: "input",
      label: "Password",
      inputType: "password",
      name: "password",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Password Required"
        }
      ]
    },
    {
      type: "radiobutton",
      label: "Gender",
      name: "gender",
      options: ["Male", "Female"],
      value: "Male"
    },
    {
      type: "date",
      label: "DOB",
      name: "dob",
      validations: [
        {
        name: "required",
        validator: Validators.required,
        message: "Date of Birth Required"
        }
      ]
    },
    {
      type: "select",
      label: "Country",
      name: "country",
      value: "UK",
      options: ["India", "UAE", "UK", "US"]
    },
    {
      type: "checkbox",
      label: "Accept Terms",
      name: "term",
      value: true
    },
    {
      type: "button",
      label: "Save"
    }
  ];

  questions: QuestionBase<string>[] | undefined;
  //form!: FormGroup;
  payLoad = '';

  constructor(public service: QuestionService, private qcs: QuestionControlService, public translate: TranslateService) {
    translate.addLangs(environment.arrayLangs);
    this.translate.setDefaultLang(environment.defaultLang);
    this.translate.use(environment.defaultLang)
     service.getQuestions().subscribe({
      next: (questions: any) => {
        this.questions = JSON.parse(JSON.stringify(questions));
        console.log("this.questions: ", this.questions);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  ngOnInit() {
    //this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    //this.payLoad = JSON.stringify(this.form.getRawValue());
  }

  submit(payload: any) {
    alert('Submitted payload is ' + JSON.stringify(payload, null, 2));
  }
}
