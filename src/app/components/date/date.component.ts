import {CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { FieldConfig } from "../../field.interface";

@Component({
  standalone: true,
  selector: 'app-date',
  templateUrl: './date.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class DateComponent implements OnInit {
  field!: FieldConfig;
  group!: FormGroup;
  constructor() {}
  ngOnInit() {}
}
