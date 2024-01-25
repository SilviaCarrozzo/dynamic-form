/**
  import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';
  import { CommonModule } from '@angular/common';

  import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
  import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
  import { HttpLoaderFactory } from 'src/app/app.module';
  import { HttpClient } from '@angular/common/http';
  import {NgForOf, NgIf} from "@angular/common";
  import {FormsModule, ReactiveFormsModule} from "@angular/forms";
  import {NzInputModule} from "ng-zorro-antd/input";
  import { FormContainerComponent } from '../pages/form-container/form-container.component';
  import { DynamicFormComponent } from 'src/app/components/dynamic-form/dynamic-form.component';
  import { DynamicFieldDirective } from 'src/app/components/dynamic-field/dynamic-field.directive';
  import { MaterialModule } from 'src/app/material.module';

  const routes: Routes = [
    { path: '', component: FormContainerComponent },
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, NgForOf, FormsModule, ReactiveFormsModule, NzInputModule, NgIf, NgZorroAntdModule,
      TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
        }
      })
    ],
    declarations: [
      FormContainerComponent, //DynamicFormComponent, DynamicFieldDirective,
    ],
    exports: [RouterModule, NgZorroAntdModule, MaterialModule],
    //schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
  })
  export class FormContainerRoutingModule { }
*/
