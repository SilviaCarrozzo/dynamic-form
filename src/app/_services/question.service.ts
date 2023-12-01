import { Injectable } from '@angular/core';

import { DropdownQuestion } from '../question-dropdown';
import { QuestionBase } from '../question-base';
import { TextboxQuestion } from '../question-textbox';
import { of } from 'rxjs';
import * as formSet from '../_models/formModels';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionService {

  constructor(public http: HttpClient) {}

  // TODO: get from a remote source of question metadata
  getQuestions(formKind: string) {
    switch(formKind) {
      case 'characteristicForm': {
        return of(formSet.characteristicForm.sort((a, b) => a.order - b.order));
       // break;
      }
      case 'processForm': {
        return of(formSet.processForm.sort((a, b) => a.order - b.order));
        //break;
      }
      case 'planForm': {
        return of(formSet.planForm.sort((a, b) => a.order - b.order));
        //break;
      }
      default: {
        return of(formSet.characteristicForm.sort((a, b) => a.order - b.order));
        //break;
      }
    };
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
