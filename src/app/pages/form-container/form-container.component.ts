import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {QuestionBase} from '../../question-base';
import {QuestionControlService} from 'src/app/_services/question-control.service';
import { QuestionService } from 'src/app/_services/question.service';

import { FieldConfig } from 'src/app/field.interface';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import * as sampleForms from 'src/app/_models/sampleForms';
import { MaterialModule } from 'src/app/material.module';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { DynamicFormQuestionComponent } from "../dynamic-form-question/dynamic-form-question.component";
import {DynamicFormComponent} from 'src/app/components/dynamic-form/dynamic-form.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-form-container',
    templateUrl: './form-container.component.html',
    providers: [QuestionControlService, TranslatePipe],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, TranslateModule,
      NgZorroAntdModule, DynamicFormComponent, DynamicFormQuestionComponent]
})
export class FormContainerComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form!: DynamicFormComponent;
  regConfig: FieldConfig[] =  sampleForms.formContatto;
  formKind: any;
  @Input() questions: QuestionBase[] | null = [];
  newForm!: FormGroup;
  payLoad = '';
  newFormTitle: string = 'Form';
  listOfControl: Array<{ id: number; controlInstance: string }> = [];

  constructor(public questionService: QuestionService, private qcs: QuestionControlService,
    public translate: TranslateService, private route: ActivatedRoute, private router: Router,
    private fb: FormBuilder) {
      translate.addLangs(environment.arrayLangs);
      this.translate.setDefaultLang(environment.defaultLang);
      this.translate.use(environment.defaultLang);
  }

  ngOnInit() {
    const queryString = window.location.pathname;
    this.formKind = queryString.split('/')[3];
    if(this.formKind) {
      this.questionService.getQuestions(this.formKind).subscribe((result: any) => {
          this.questions = result;
          console.log("Questions: ", this.questions);
          //this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
          this.newForm = this.qcs.toFormGroup(this.questions as QuestionBase[]);
          this.newFormTitle= this.translate.instant(this.formKind);
        },
        (error: any) => {
            console.error(error);
          // Handle the error if needed
          console.error("Errore: ", error);
        });
    }
  }

  addField(e?: MouseEvent): void {
    e?.preventDefault();

    const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `additional${id}`
    };
    const index = this.listOfControl.push(control);
    console.log(this.listOfControl[this.listOfControl.length - 1]);
    this.newForm.addControl(
      this.listOfControl[index - 1].controlInstance,
      this.fb.control('', Validators.required)
    );
  }

  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      console.log(this.listOfControl);
      this.newForm.removeControl(i.controlInstance);
    }
  }

  onSubmit() {
    console.log(this.newForm.value);
    this.payLoad = JSON.stringify(this.newForm.getRawValue());
  }

  submit(payload: any) {
    alert('Submitted payload is ' + JSON.stringify(payload, null, 2));
  }
}


/**
 *   /*this.route.data.subscribe(({form}) => {
      this.questions = form;
      console.log("Questions: ", this.questions);
      this.newForm = this.qcs.toFormGroup(this.questions as QuestionBase<any>[]);
    });
 *
 * this.newForm = this.fb.group({
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

   newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: ''
    });
  }

  formFields(): FormArray {
    return this.newForm.get(this.formKind) as FormArray;
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

  addFormBlock() {
    this.formFields().push(this.newEmployee());
  }

  removeFormBlock(empIndex: number) {
    this.formFields().removeAt(empIndex);
  }
*/
