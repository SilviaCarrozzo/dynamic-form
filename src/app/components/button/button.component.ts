import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { FieldConfig } from "../../field.interface";
import {QuestionBase} from '../../question-base';

@Component({
  standalone: true,
  selector: 'app-button',
  templateUrl: './button.component.html',
  imports: [CommonModule, ReactiveFormsModule],
})

export class ButtonComponent implements OnInit {
  field!: FieldConfig;
  group!: FormGroup;
  constructor() {}
  ngOnInit() {}
}
