/**
  import { APP_INITIALIZER, NgModule } from '@angular/core';
  import {BrowserModule} from "@angular/platform-browser";

  import {CommonModule} from "@angular/common";
  import {NzButtonModule} from "ng-zorro-antd/button";
  import {NzModalModule} from "ng-zorro-antd/modal";
  import {FormsModule, ReactiveFormsModule} from "@angular/forms";
  import {NzInputModule} from "ng-zorro-antd/input";
  import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
  import { HttpClient } from '@angular/common/http';
  import { TranslateHttpLoader } from '@ngx-translate/http-loader';
  import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
  import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';
  import { DynamicFieldDirective } from '../components/dynamic-field/dynamic-field.directive';
  import { MaterialModule } from 'src/app/material.module';
  // AoT requires an exported function for factories
  export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);

    //return new TranslateHttpLoader(httpClient,
      //environment.feServerUrl + '/assets/i18n/', '.json');
  }
  export function translateFactory(translate: TranslateService) {
    return async () => {
          return new Promise<void>(resolve => {
              translate.onLangChange.subscribe(() => {
                  resolve();
              });
          });
      };
  }

  @NgModule({//AnagraficaPianiRoutingModule
    imports: [CommonModule, MaterialModule, NzButtonModule, NzModalModule, FormsModule, ReactiveFormsModule, NzInputModule,
      TranslateModule.forRoot({
        // schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })],
    declarations: [DynamicFormComponent, DynamicFieldDirective],
    exports: [DynamicFieldDirective, MaterialModule],
    providers: [
      { provide: NZ_I18N, useValue: en_US },
      {
        provide: APP_INITIALIZER,
        useFactory: translateFactory,
        deps: [TranslateService],
        multi: true
      },
    ],
  })
  export class DynamicFormModule { }
*/
