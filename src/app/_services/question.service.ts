import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as formSet from '../_models/formModels';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionService {

  constructor(public http: HttpClient) {}

  // TODO: get from a remote source of question metadata
  getQuestions(formKind: string) : any {
    try {
      switch(formKind) {
        case 'characteristicForm': {
          return of(formSet.characteristicForm); //.sort((a, b) => (a.order && b.order)?a.order - b.order: 0));
          //return this.http.post(environment.apiUrl + 'viewPlanMasterLPTS', {PLANT, PLANT_LANG, LEVEL_ID});
         // break;
        }
        case 'processForm': {
          return of(formSet.processForm); //.sort((a, b) => (a.order && b.order)?a.order - b.order: 0));
          //break;
        }
        case 'planForm': {
          return of(formSet.planForm); //.sort((a, b) => (a.order && b.order)?a.order - b.order: 0));
          //break;
        }
        default: {
          return of(formSet.characteristicForm); //.sort((a, b) => (a.order && b.order)?a.order - b.order: 0));
          //break;
        }
      };
      /*const response = this.http.post(url, {...plan, APPROVAL_EMAIL, USERNAME, NOTA}).toPromise();
      return response;*/
    } catch(error) {
      return error
    }

  }

}
