import { NgModule } from '@angular/core';
import { Routes, RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { BasicFormModelsComponent } from './pages/basic-form-models/basic-form-models.component';
import { FormContainerComponent } from './pages/form-container/form-container.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/basic-form-models' },
  { path: 'basic-form-models', pathMatch: 'full', loadComponent: () => BasicFormModelsComponent},
  { path: 'basic-form-models/form', loadComponent: () => FormContainerComponent},
  { path: 'basic-form-models/form/planForm', component: FormContainerComponent },
  { path: 'basic-form-models/form/characteristicForm', component: FormContainerComponent },
  { path: 'basic-form-models/form/processForm', component: FormContainerComponent },
  { path: 'basic-form-models/form/defectForm', component: FormContainerComponent },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    provideRouter(routes, withComponentInputBinding()),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }



/*

/*{
    path: "basic-form-models",
    component: BasicFormModelsComponent,
    children: [
      { path: "form", component: FormContainerComponent },
      { path: "", redirectTo: "form", pathMatch: "full" }
    ]
  },
    /children: [
      {
        path: 'form/:formKind',  // child route path
        component: FormContainerComponent,
          resolve: {
            'form': (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
                        inject(QuestionService).getQuestions(route.paramMap.get('formKind')!)
          }
      }
    ]
  },

  { path: 'basic-form-models/characteristicForm', pathMatch: 'full', loadComponent: () => FormContainerComponent},
  //{ path: 'basic-form-models/characteristicForm', pathMatch: 'full', loadComponent: () => FormContainerComponent}
  {path: '**', component: FormContainerComponent}

 {
    path: 'dettaglio/:idDrink',
    component: DettaglioComponent,
    resolve: {
                'drink': (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
                            inject(ApiService).lookupByI(route.paramMap.get('idDrink')!)
        }
  },
  data: { breadcrumbI18nKey: 'menuTendinaLaterale.home'}
  loadChildren: () => import('./notesComponents/form-container.module').then(m => m.FormContainerModule)
  //component: DynamicFormComponent, loadChildren: () => import('./pages/dynamic-form/dynamic-form.component').then(m => m.DynamicFormComponent),
  //loadComponent?: () => Type<unknown> | Observable<Type<unknown> |
  //data: { breadcrumbI18nKey: 'menuTendinaLaterale.home'}

{ path: 'dynamic-form-question', pathMatch: 'full',  loadComponent: () => DynamicFormQuestionComponent
  //component: DynamicFormQuestionComponent, loadChildren: () => import('./pages/dynamic-form-question/dynamic-form-question.component').then(m => m.DynamicFormQuestionComponent),
  //data: { breadcrumbI18nKey: 'menuTendinaLaterale.home'}
  }
  { path: 'laboratorioOQ', loadChildren: () => import('./pages/RaccoltaDati/laboratorioOQ.module').then(m => m.LaboratorioOQModule), data: {
      breadcrumbI18nKey: 'menuTendinaLaterale.laboratorioOQ'}
  },
*/
