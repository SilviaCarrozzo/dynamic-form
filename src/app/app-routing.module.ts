import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormContainerComponent } from './pages/form-container/form-container.component';
import { BasicFormModelsComponent } from './pages/basic-form-models/basic-form-models.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'basic-form-models', pathMatch: 'full', loadComponent: () => BasicFormModelsComponent
  //data: { breadcrumbI18nKey: 'menuTendinaLaterale.home'}
  },
  { path: 'dynamic-form', pathMatch: 'full', loadComponent: () => FormContainerComponent
  //component: DynamicFormComponent, loadChildren: () => import('./pages/dynamic-form/dynamic-form.component').then(m => m.DynamicFormComponent),
  //loadComponent?: () => Type<unknown> | Observable<Type<unknown> |
  //data: { breadcrumbI18nKey: 'menuTendinaLaterale.home'}
  },
  /*{ path: 'dynamic-form-question', pathMatch: 'full',  loadComponent: () => DynamicFormQuestionComponent
    //component: DynamicFormQuestionComponent, loadChildren: () => import('./pages/dynamic-form-question/dynamic-form-question.component').then(m => m.DynamicFormQuestionComponent),
    //data: { breadcrumbI18nKey: 'menuTendinaLaterale.home'}
    }
    { path: 'laboratorioOQ', loadChildren: () => import('./pages/RaccoltaDati/laboratorioOQ.module').then(m => m.LaboratorioOQModule), data: {
        breadcrumbI18nKey: 'menuTendinaLaterale.laboratorioOQ'}
    },*/
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
