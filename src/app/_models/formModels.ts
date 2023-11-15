import { QuestionBase } from "../question-base";
import { DropdownQuestion } from "../question-dropdown";
import { TextboxQuestion } from "../question-textbox";

/*const questions: QuestionBase<string>[] = [

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


export const characteristicForm: QuestionBase<string>[] = [
  //'CHARACT_ID': new FormControl(null, Validators.required),
  new DropdownQuestion({
      key: 'CHARACT_ID',
      label: 'CHARACT_ID',
      options: [//lista di caratteristiche
        {key: 'solid',  value: 'Solid'},
        {key: 'great',  value: 'Great'},
        {key: 'good',   value: 'Good'},
        {key: 'unproven', value: 'Unproven'}
      ],
      order: 1
    }),

//'CHARACT_TYPE': new FormControl(null),
  new DropdownQuestion({
    key: 'CHARACT_TYPE',
    label: 'CHARACT_TYPE',
    options: [//lista di caratteristiche
      {key: "0", value: '0 = V - Variabile'},
      {key: "1", value: '1 = A - Attributo'},
      {key: "2", value: '2 = C - Counting'}
    ],
    order: 2
  }),

  new TextboxQuestion({
    key: 'C_POS',
    label: 'C_POS',
    value: '1',
    required: true,
    order: 1
  }),
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
      });*/
];

