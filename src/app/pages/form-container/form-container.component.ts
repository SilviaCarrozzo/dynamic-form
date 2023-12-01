import {Component, Input, OnInit, ViewChild} from '@angular/core';
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
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { DynamicFormQuestionComponent } from "../dynamic-form-question/dynamic-form-question.component";
import {DynamicFormComponent} from 'src/app/components/dynamic-form/dynamic-form.component';
import { FormContainerRoutingModule } from './form-container-routing.module';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    standalone: true,
    selector: 'app-form-container',
    templateUrl: './form-container.component.html',
    providers: [QuestionControlService],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, FormContainerRoutingModule,
      NgZorroAntdModule, DynamicFormComponent, DynamicFormQuestionComponent]
})
export class FormContainerComponent implements OnInit {
 // @ViewChild(DynamicFormComponent) form!: DynamicFormComponent;
  regConfig: FieldConfig[] =  sampleForms.formContatto;
  @Input() formKind: string = '';
  questions: QuestionBase<string>[] | undefined;
  newForm!: FormGroup
  payLoad = '';
  newFormTitle: string = 'Form';

  constructor(public service: QuestionService, private qcs: QuestionControlService, public translate: TranslateService,
    private route: ActivatedRoute, private router: Router,
    private fb: FormBuilder) {
      translate.addLangs(environment.arrayLangs);
      this.translate.setDefaultLang(environment.defaultLang);
      this.translate.use(environment.defaultLang);
  }

  ngOnInit() {
    this.route.data.subscribe({
      next: ({form}) => {
        this.questions = form;
        console.log("Questions: ", this.questions);
        this.newForm = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
        this.newFormTitle = form.strDrink;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: ''
    });
  }

  formFields(): FormArray {
    return this.newForm.get('formCharacteristic') as FormArray;
  }

  employeeSkills(empIndex: number): FormArray {
    return this.formFields()
      .at(empIndex)
      .get('skills') as FormArray;
  }

  addEmployeeSkill(empIndex: number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  removeEmployeeSkill(empIndex: number, skillIndex: number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log(this.newForm.value);
  }

  submit(payload: any) {
    alert('Submitted payload is ' + JSON.stringify(payload, null, 2));
  }
}



/**this.newForm = this.fb.group({
      formCharacteristic: this.fb.array([])
    });

    formFields(): FormArray {
    return this.newForm.get('formCharacteristic') as FormArray;
  }

  newEmployee(): FormGroup {
    return this.fb.group({
      campo1: '',
      campo2: '',
      skills: this.fb.array([])
    });
  }

  addFormBlock() {
    this.formFields().push(this.newEmployee());
  }

  removeFormBlock(empIndex: number) {
    this.formFields().removeAt(empIndex);
  }
*/
