import { Validators } from "@angular/forms";
import { QuestionBase } from "../question-base";

interface FormModel {
  id: string;
  label: string;
}

export const models : string[] = [ "characteristicForm", "planForm", "processForm", "defectForm", "defectGroupForm"];


export const characteristicForm: QuestionBase[] = [//
  {
    type: "select",
    label: "CHARACT_ID",
    inputType: "select",
    name: "CHARACT_ID",
    controlType: "none",
    id: "CHARACT_ID",
    value: "",
    /*validations: [
      {
        name: "required",
        validator: Validators.required,
        message: "CHARACT_ID Required"
      },
      {
        name: "pattern",
        validator: Validators.pattern("^[a-zA-Z]+$"),
        message: "Accept only text"
      }
    ],*/
    options: [//lista di caratteristiche
      {key: 'solid',  value: 'Solid'},
      {key: 'great',  value: 'Great'},
      {key: 'good',   value: 'Good'},
      {key: 'unproven', value: 'Unproven'}
    ],
    order: 1
  },
  {
    type: "select",
    label: "CHARACT_TYPE",
    name: "CHARACT_TYPE",
    inputType: "select",
    id: "CHARACT_TYPE",
    value: "0",
    options: [//lista di caratteristiche
      {key: "0", value: '0 = V - Variabile'},
      {key: "1", value: '1 = A - Attributo'},
      {key: "2", value: '2 = C - Counting'}
    ],
    order: 2
  },
  {
    type: "input",
    key: 'C_POS',
    id: "C_POS",
    name: "C_POS",
    label: 'C_POS',
    inputType: "number",
    value: '0',
    required: true,
    order: 3
  },
  {
    type: "input",
    label: "C_DECIMAL",
    inputType: "number",
    name: "C_DECIMAL",
    id: 'C_DECIMAL',
    value: '7',
    order: 7
  },
  {
    type: "input",
    label: "Email Address",
    inputType: "email",
    name: "Email Address",
    id: 'Email Address',
    value: '',
    order: 7,
    /*validations: [
      {
        name: "required",
        "validator": Validators.required,
        message: "Email Required"
      },
      {
        name: "pattern",
        "validator": Validators.pattern(
        "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
        ),
        message: "Invalid email"
      }
    ]*/
  }
];

export const processForm: QuestionBase[] = [
  {
    type: "select",
    label: "PROC_ID",
    inputType: "select",
    name: "PROC_ID",
    id: "PROC_ID",
    required: true,
    value: "0",
    /*validations: [
      {
        name: "required",
        validator: Validators.required,
        message: "CHARACT_ID Required"
      },
      {
        name: "pattern",
        validator: Validators.pattern("^[a-zA-Z]+$"),
        message: "Accept only text"
      }
    ],*/
    options: [//lista di caratteristiche
      {key: 'solid',  value: 'Solid'},
      {key: 'great',  value: 'Great'},
      {key: 'good',   value: 'Good'},
      {key: 'unproven', value: 'Unproven'}
    ],
    order: 1
  },
  {
    type: "select",
    label: "P_ACT_TYPE",
    name: "P_ACT_TYPE",
    inputType: "select",
    id: "P_ACT_TYPE",
    value: "0",
    options: [//lista di caratteristiche
      {key: "0", value: 'P_ACT_TYPE1'},
      {key: "1", value: 'P_ACT_TYPE2'},
      {key: "2", value: 'P_ACT_TYPE3'}
    ],
    order: 3
  },
  {
    type: "select",
    label: "P_ACT",
    name: "P_ACT",
    inputType: "select",
    id: "P_ACT",
    value: "0",
    options: [//lista di caratteristiche
      {key: "0", value: 'P_ACT1'},
      {key: "1", value: 'P_ACT2'},
      {key: "2", value: 'P_ACT3'}
    ],
    order: 4
  },
  //'P_ACT_COND': new FormControl(null),
  {
    type: "select",
    label: "P_ACT_COND",
    name: "P_ACT_COND",
    inputType: "select",
    id: "P_ACT_COND",
    value: "0",
    options: [//lista di caratteristiche
      {key: "0", value: 'P_ACT_COND1'},
      {key: "1", value: 'P_ACT_COND2'},
      {key: "2", value: 'P_ACT_COND3'}
    ],
    order: 4
  },
  {
    type: "input",
    key: 'PROC_POS',
    name: "PROC_POS",
    id: "PROC_POS",
    label: 'PROC_POS',
    inputType: "number",
    value: '0',
    required: true,
    order: 2,
  },
];


export const planForm: QuestionBase[] = [
  {
    type: "select",
    label: "PLANT",
    inputType: "select",
    name: "PLANT",
    id: "PLANT",
    required: true,
    value: "1001",
    /*validations: [
      {
        name: "required",
        validator: Validators.required,
        message: "CHARACT_ID Required"
      },
      {
        name: "pattern",
        validator: Validators.pattern("^[a-zA-Z]+$"),
        message: "Accept only text"
      }
    ],*/
    options: [//lista di caratteristiche
      {key: 'solid',  value: 'Solid'},
      {key: 'great',  value: 'Great'},
      {key: 'good',   value: 'Good'},
      {key: 'unproven', value: 'Unproven'}
    ],
    order: 1
  },
  {
    type: "select",
    label: "PLAN_ID",
    inputType: "select",
    name: "PLAN_ID",
    id: "PLAN_ID",
    required: true,
    value: "0",
    /*validations: [
      {
        name: "required",
        validator: Validators.required,
        message: "CHARACT_ID Required"
      },
      {
        name: "pattern",
        validator: Validators.pattern("^[a-zA-Z]+$"),
        message: "Accept only text"
      }
    ],*/
    options: [//lista di caratteristiche
      {key: 'solid',  value: 'Solid'},
      {key: 'great',  value: 'Great'},
      {key: 'good',   value: 'Good'},
      {key: 'unproven', value: 'Unproven'}
    ],
    order: 1
  },
  {
    type: "select",
    label: "LEVEL_ID",
    name: "LEVEL_ID",
    inputType: "select",
    id: "LEVEL_ID",
    value: "0",
    options: [//lista di caratteristiche
      {key: "0", value: 'LEVEL_ID1'},
      {key: "1", value: 'LEVEL_ID2'},
      {key: "2", value: 'LEVEL_ID3'}
    ],
    order: 3
  },
  {
    type: "select",
    label: "PLANT_LANG",
    name: "PLANT_LANG",
    inputType: "select",
    id: "PLANT_LANG",
    value: "0",
    options: [//lista di caratteristiche
      {key: "0", value: 'ITA'},
      {key: "1", value: 'FRA'},
      {key: "2", value: 'ING'}
    ],
    order: 4
  },
  //PROD_TYPE
  {
    type: "select",
    label: "PROD_TYPE",
    name: "PROD_TYPE",
    inputType: "select",
    id: "PROD_TYPE",
    value: "0",
    options: [//lista di caratteristiche
      {key: "0", value: 'PROD_TYPE1'},
      {key: "1", value: 'PROD_TYPE2'},
      {key: "2", value: 'PROD_TYPE3'}
    ],
    order: 4
  },
];

/*
"PIANO": {

    "PLANT": "PlantValue",

    "PLANT_LANG": "PlantLangValue",

    "PLAN_ID": "PlanIDValue",

    "PROD_TYPE": "ProdTypeValue",

    "LEVEL_ID": "LevelIDValue",

    "PROCESSO":

const questions: QuestionBase<string>[] = [

  new DropdownQuestion({
    key: 'brave',
    label: 'Bravery Rating',
    options: [
      {key: 'solid',  value: 'Solid'},
      {key: 'great',  value: 'Great'},
      {key: 'good',   value: 'Good'},
      {key: 'unproven', value: 'Unproven'}
    ],
    order: 3
  }),

  new TextboxQuestion({
    key: 'firstName',
    label: 'First name',
    value: 'Bombasto',
    required: true,
    order: 1
  }),

  new TextboxQuestion({
    key: 'emailAddress',
    label: 'Email',
    type: 'email',
    order: 2
  })
];*/

/*
    'C_POS': new FormControl(this.nzModalData.charLength+1 || 1),
    'C_FORMULA': new FormControl('K'),
    'C_DECIMAL': new FormControl(null),
    'C_UOM': new FormControl(null),
    'C_ACT_TYPE': new FormControl(null),
    'C_ACT': new FormControl(null),
    'C_ACT_COND': new FormControl(null),
    'C_ACT_VAL': new FormControl(null),
    'SGRP_METHODE_TYPE': new FormControl(null),
    'SGRP_TYPE': new FormControl(null),
    'SGRP': new FormControl(1),
    'SGRP_BLOCK': new FormControl(null),
    'WRPARAM_1': new FormControl(null),
    'OP_W': new FormControl(null),
    'WRPARAM_2': new FormControl(null),
    'C_ATTR_GROUP': new FormControl(null),
    'PARAM_11': new FormControl(null),
    'PARAM_12': new FormControl(null),
    'PARAM_21': new FormControl(null),
    'PARAM_22': new FormControl(null),
    'PARAM_31': new FormControl(null),
    'PARAM_32': new FormControl(null),
    'OP_1': new FormControl(null),
    'OP_2': new FormControl(null),
    'OP_3': new FormControl(null),
    'NOMINAL': new FormControl('N'),
    'NOM_PIC': new FormControl(null),
    'NOM_PLAN': new FormControl(null),
    'NOM_1': new FormControl(null),
    'NOM_2': new FormControl(null),
    'NOM_3': new FormControl(null),
    'SPEC_LIMIT': new FormControl(null),
    'SPEC_TYPE': new FormControl(null),
    'LSL_PIC': new FormControl(null),
    'USL_PIC': new FormControl(null),
    'LSL_PLAN': new FormControl(null),
    'USL_PLAN': new FormControl(null),
    'LSL_1': new FormControl(null),
    'USL_1': new FormControl(null),
    'LSL_2': new FormControl(null),
    'USL_2': new FormControl(null),
    'LSL_3': new FormControl(null),
    'USL_3': new FormControl(null),
    'CONTROL_LIMIT': new FormControl(null),
    'LCL_PIC': new FormControl(null),
    'UCL_PIC': new FormControl(null),
    'LCL_PLAN': new FormControl(null),
    'UCL_PLAN': new FormControl(null),
    'AVG_ACT': new FormControl(null),
    'STD_DEV_ACT': new FormControl(null),
    'P_DEFECTS': new FormControl(null),
  });
*/


/*processForm
this.validateForm = new FormGroup({
    'PROC_ID': new FormControl(null, Validators.required),
    'PROC_POS': new FormControl(this.nzModalData.nProcessi || 0),
    'P_ACT_TYPE': new FormControl(null),
    'P_ACT': new FormControl(null),
    'P_ACT_COND': new FormControl(null),
    'P_ACT_VAL': new FormControl(null),
    'P_INTERFACE_A': new FormControl(null),
    'P_TYPE': new FormControl(null),
    'N_CHECK_TYPE': new FormControl(null),
    'P_EXPIRE_BASED_ON': new FormControl(null),
    'P_EXPIRE_TYPE': new FormControl(null),
    'P_EXPIRE_FIRST': new FormControl(null),
    'P_EXPIRE_NEXT': new FormControl(null),
    'P_EXPIRE_WARNING': new FormControl(null),
    'P_EXPIRE_CASE_NUM_TARGET': new FormControl(null),
    'P_RIC_TRS':  new FormControl(null),
    'P_UPDATE_LABEL':  new FormControl(null)
  });
*/


