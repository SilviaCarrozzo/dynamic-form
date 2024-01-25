import { NgModule, inject } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { QuestionService } from 'src/app/_services/question.service';
//import { FormContainerComponent } from '../pages/form-container/form-container.component';

const routes: Routes = [
  {
    path: '/:formKind',
    //component: FormContainerComponent,
      resolve: {
        'form': (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
                    inject(QuestionService).getQuestions(route.paramMap.get('formKind')!)
      },
    /*
    resolve: {
            'form': (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
                        inject(QuestionService).getQuestions(route.paramMap.get('formKind')!)
    }*/
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class FormContainerRoutingModule { }



/* {
    path: 'dettaglio/:idDrink',
    component: DettaglioComponent,
    resolve: {
                'drink': (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
                            inject(ApiService).lookupByI(route.paramMap.get('idDrink')!)
        }
  },
  {
    path: 'elenco:letter',
    component: ElencoComponent,
    resolve: {
      'searchResponse': (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
                  inject(ApiService).searchByF(route.paramMap.get('letter')!)
    }
  },
{ path: 'dynamic-form-question', pathMatch: 'full',  loadComponent: () => DynamicFormQuestionComponent
  //component: DynamicFormQuestionComponent, loadChildren: () => import('./pages/dynamic-form-question/dynamic-form-question.component').then(m => m.DynamicFormQuestionComponent),
  //data: { breadcrumbI18nKey: 'menuTendinaLaterale.home'}
  }
  { path: 'laboratorioOQ', loadChildren: () => import('./pages/RaccoltaDati/laboratorioOQ.module').then(m => m.LaboratorioOQModule), data: {
      breadcrumbI18nKey: 'menuTendinaLaterale.laboratorioOQ'}
  },
*/
