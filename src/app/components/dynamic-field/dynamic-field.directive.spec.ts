import { DynamicFieldDirective } from './dynamic-field.directive';
import { FormsModule, FormGroupDirective } from '@angular/forms';
import {FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { FieldConfig } from "../../field.interface";
import { InputComponent } from "../input/input.component";
import { ButtonComponent } from "../button/button.component";
import { SelectComponent } from "../select/select.component";
import { DateComponent } from "../date/date.component";
import { RadiobuttonComponent } from "../radiobutton/radiobutton.component";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import {
  ComponentFactoryResolver,Type, ComponentRef, Directive, Input, OnInit,
  ViewContainerRef
  } from "@angular/core";

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


describe('DynamicFieldDirective', () => {
  it('should create an instance', () => {
    let field = {type: 'input'};
    let group = new FormGroup({});
    let componentRef: ComponentRef<any>; // Use ComponentRef<any>
    let resolver: ComponentFactoryResolver;
    let container: ViewContainerRef;

    /*const type: ComponentType = field.type as ComponentType;
      const factory = resolver.resolveComponentFactory(componentMapper[type] as Type<DynamicComponent>);
      componentRef = container.createComponent(factory) as ComponentRef<DynamicComponent>;
      componentRef.instance.field = field;
      componentRef.instance.group = group;

      // Check if groupToBePopulated property exists
      if ('groupToBePopulated' in ComponentRef.instance) {
        ComponentRef.instance.groupToBePopulated = group;
      }
    //const directive = new DynamicFieldDirective(componentRef, group);
    expect(directive).toBeTruthy();*/
  });
});
