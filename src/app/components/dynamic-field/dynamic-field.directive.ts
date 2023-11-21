import {
  ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit,
  ViewContainerRef
  } from "@angular/core";
import { FormsModule, FormGroupDirective } from '@angular/forms';
import {FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { FieldConfig } from "../../field.interface";
import { InputComponent } from "../input/input.component";
import { ButtonComponent } from "../button/button.component";
import { SelectComponent } from "../select/select.component";
import { DateComponent } from "../date/date.component";
import { RadiobuttonComponent } from "../radiobutton/radiobutton.component";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { Type } from '@angular/core';

const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DateComponent,
  radiobutton: RadiobuttonComponent,
  checkbox: CheckboxComponent
} as const;

export interface DynamicComponent {
  field: any; // You might want to specify a more specific type
  group: FormGroup;
  groupToBePopulated?: FormGroup; // Make it optional
}

// Define a type for the keys of componentMapper
type ComponentType = keyof typeof componentMapper

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() field!: FieldConfig;
  @Input() group!: FormGroup;
  componentRef!: ComponentRef<any>; // Use ComponentRef<any>

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
    ) {}

  ngOnInit() {

    if (this.field && this.field.type) {
      const type: ComponentType = this.field.type as ComponentType;
      const factory = this.resolver.resolveComponentFactory(componentMapper[type] as Type<DynamicComponent>);

      this.componentRef = this.container.createComponent(factory) as ComponentRef<DynamicComponent>;
      this.componentRef.instance.field = this.field;
      this.componentRef.instance.group = this.group;

      // Check if groupToBePopulated property exists
      if ('groupToBePopulated' in this.componentRef.instance) {
        this.componentRef.instance.groupToBePopulated = this.group;
      }
    }
  }

  capitalize(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}

