import { Validator } from "inquirer";

export class QuestionBase {
  name: string;
  id: string;
  value: any;
  key?: string;
  label: string;
  validations?: {name: string, validator: Validator, message: string}[];
  required?: boolean;
  order?: number;
  controlType?: string;
  type: string;
  inputType: string;
  options?: {key: string, value: string}[];

  constructor(options: {
      value?: any;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      inputType?: string;
      name?: string;
      id?: string;
      validations?: {name: string, "validator": Validator, message: string}[];
      type?: string;
      options?: {key: string, value: string}[];
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.inputType= options.inputType || '';
    this.name= options.name || '';
    this.id= options.id || '';
    this.validations = options.validations || [];
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
  }
}

