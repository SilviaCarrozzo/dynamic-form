import {Component, Input, NO_ERRORS_SCHEMA, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {QuestionBase} from '../../question-base';
import {QuestionControlService} from 'src/app/_services/question-control.service';

import { QuestionService } from 'src/app/_services/question.service';
import { Validators } from "@angular/forms";

import { FieldConfig } from 'src/app/field.interface';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import * as sampleForms from 'src/app/_models/sampleForms';
import { MaterialModule } from 'src/app/material.module';
/*import {DynamicFormComponent} from 'src/app/components/dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from 'src/app/components/dynamic-field/dynamic-field.directive';*/


@Component({
  standalone: true,
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  providers: [QuestionControlService]//, DynamicFieldDirective
})
export class FormContainerComponent implements OnInit {
 // @ViewChild(DynamicFormComponent) form!: DynamicFormComponent;
  regConfig: FieldConfig[] =  sampleForms.formContatto;
  questions: QuestionBase<string>[] | undefined;
  empForm!: FormGroup;
  //form!: FormGroup;
  payLoad = '';

  constructor(public service: QuestionService, private qcs: QuestionControlService, public translate: TranslateService,
    private fb: FormBuilder) {
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
    this.empForm = this.fb.group({
      employees: this.fb.array([])
    });
  }

  employees(): FormArray {
    return this.empForm.get('employees') as FormArray;
  }

  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
      skills: this.fb.array([])
    });
  }

  addEmployee() {
    this.employees().push(this.newEmployee());
  }

  removeEmployee(empIndex: number) {
    this.employees().removeAt(empIndex);
  }

  employeeSkills(empIndex: number): FormArray {
    return this.employees()
      .at(empIndex)
      .get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: ''
    });
  }

  addEmployeeSkill(empIndex: number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  removeEmployeeSkill(empIndex: number, skillIndex: number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log(this.empForm.value);
  }

  submit(payload: any) {
    alert('Submitted payload is ' + JSON.stringify(payload, null, 2));
  }
}
