import {
  ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit,
  ViewContainerRef
  } from "@angular/core";
  import { FormGroup } from "@angular/forms";
  import { FieldConfig } from "../../field.interface";
  import { InputComponent } from "../input/input.component";
  import { ButtonComponent } from "../button/button.component";
  import { SelectComponent } from "../select/select.component";
  import { DateComponent } from "../date/date.component";
  import { RadiobuttonComponent } from "../radiobutton/radiobutton.component";
  import { CheckboxComponent } from "../checkbox/checkbox.component";

const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DateComponent,
  radiobutton: RadiobuttonComponent,
  checkbox: CheckboxComponent
} as const;

// Define a type for the keys of componentMapper
type ComponentType = keyof typeof componentMapper

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input()
  field!: FieldConfig;
  @Input()
  group!: FormGroup;
  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
    ) {}

  ngOnInit() {
    if(this.field && this.field.type) {
      let typeofComp: string = this.capitalize(this.field.type) + 'Component';
      const type: ComponentType = this.field.type as ComponentType;
      const factory = this.resolver.resolveComponentFactory(componentMapper[type]);

      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.field = this.field;
      this.componentRef.instance.group = this.group;
    }
  }

  capitalize(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}

