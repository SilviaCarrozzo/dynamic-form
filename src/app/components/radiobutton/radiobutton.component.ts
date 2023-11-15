import { Component, OnInit } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-radiobutton",
  standalone: true,
  templateUrl: './radiobutton.component.html',
  imports: [CommonModule, ReactiveFormsModule],

})
export class RadiobuttonComponent implements OnInit {
  field!: FieldConfig;
  group!: FormGroup;
  constructor() {}
  ngOnInit() {}
}
