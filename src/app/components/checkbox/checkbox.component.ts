import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-checkbox",
  standalone: true,
  templateUrl: './checkbox.component.html',
  imports: [CommonModule, ReactiveFormsModule],

})
export class CheckboxComponent implements OnInit {
  @Input()
  formControlName!: string | number | null;
  field!: FieldConfig;
  group!: FormGroup;
  constructor() {}
  ngOnInit() {}
}
