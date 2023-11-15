import { Component, EventEmitter, Input, NO_ERRORS_SCHEMA, OnChanges, OnInit, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from "@angular/forms";
import { FieldConfig, Validator } from "../../field.interface";
import { CommonModule } from "@angular/common";
import { QuestionBase } from "src/app/question-base";

@Component({
  standalone: true,
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DynamicFormComponent {
  @Input() fields: FieldConfig[] = [];
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  get value() {
    return this.form.value;
  }

  ngOnInit() {
    this.form = this.createControl();
  }


  createControl() {
    const group = this.fb.group({});
    this.fields.forEach(field => {
    if (field.type === "button") return;
      const control = this.fb.control(
      field.value,
      this.bindValidations(field.validations || [])
    );
    // Check if field.name is defined before adding control to the group
    if (field.name) {
      group.addControl(field.name, control);
    }
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList: any = [];
      validations.forEach((valid: { validator: any }) => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
    this.submit.emit(this.form.value);
    } else {
    this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field);
    control?.markAsTouched({ onlySelf: true });
    });
  }

}
