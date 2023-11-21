import {CUSTOM_ELEMENTS_SCHEMA, Component, Input, NO_ERRORS_SCHEMA, OnInit} from '@angular/core';
import {MatDatepickerModule, MatDatepickerToggle} from '@angular/material/datepicker';
import { MatHint, MatError, MatFormFieldModule } from '@angular/material/form-field';
import {MatNativeDateModule, MAT_DATE_LOCALE, MatOptionModule } from '@angular/material/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { FieldConfig } from "../../field.interface";

@Component({
  standalone: true,
  selector: 'app-date',
  templateUrl: './date.component.html',
  imports: [CommonModule, ReactiveFormsModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule], //,MatMomentDateModule, MatHint
  //schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})

export class DateComponent implements OnInit {
  field!: FieldConfig;
  group!: FormGroup;
  constructor() {}
  ngOnInit() {}
}
