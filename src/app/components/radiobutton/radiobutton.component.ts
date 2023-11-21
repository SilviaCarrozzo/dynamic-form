import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/material.module";
//import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/compiler";

@Component({
  selector: "app-radiobutton",
  standalone: true,
  templateUrl: './radiobutton.component.html',
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class RadiobuttonComponent implements OnInit {
  field!: FieldConfig;
  group!: FormGroup;
  constructor() {}
  ngOnInit() {}
}
