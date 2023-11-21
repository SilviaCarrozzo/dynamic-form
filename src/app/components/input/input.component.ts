import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatHint, MatError, MatFormFieldModule } from '@angular/material/form-field';
import {CommonModule} from '@angular/common';
import { FieldConfig } from "../../field.interface";
import {QuestionBase} from '../../question-base';

@Component({
  standalone: true,
  selector: 'app-input',
  templateUrl: './input.component.html',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule],
})

export class InputComponent implements OnInit {
  field: FieldConfig = {
    label: 'label',
    name: 'name',
    inputType: 'text',
    options: [],
    collections: null,
    type: 'type',
    value: 'value',
    validations: []
  };
  groupToBePopulated: FormGroup;
  constructor() {
    this.groupToBePopulated = new FormGroup({});
  }
  ngOnInit() {}
}

