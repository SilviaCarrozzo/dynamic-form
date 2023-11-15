import { Component, Input, NO_ERRORS_SCHEMA, OnInit } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/material.module";

@Component({
  standalone: true,
  selector: "app-select",
  templateUrl: './select.component.html',
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  //schemas: [NO_ERRORS_SCHEMA]
})
export class SelectComponent implements OnInit {
  field!: FieldConfig;
  group!: FormGroup;
 // @Input() placeholder: string = '';
 // @Input() formControlName: string = '';
  constructor() {}
  ngOnInit() {}
}
