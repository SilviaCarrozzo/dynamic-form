/**
  import { APP_INITIALIZER, NgModule } from '@angular/core';
  import { FormContainerRoutingModule } from './form-container.routing.module';
  import {CommonModule} from "@angular/common";
  import {NzModalModule} from "ng-zorro-antd/modal";
  import {FormsModule, ReactiveFormsModule} from "@angular/forms";
  import {NzInputModule} from "ng-zorro-antd/input";
  import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
  import { HttpClient } from '@angular/common/http';
  import { TranslateHttpLoader } from '@ngx-translate/http-loader';
  import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
  import { DynamicFormComponent } from 'src/app/components/dynamic-form/dynamic-form.component';
  import { FormContainerComponent } from '../pages/form-container/form-container.component';
  import { DynamicFieldDirective } from 'src/app/components/dynamic-field/dynamic-field.directive';
  import { MaterialModule } from 'src/app/material.module';
  import { InputComponent } from 'src/app/components/input/input.component';
  import { ButtonComponent } from 'src/app/components/button/button.component';
  import { SelectComponent } from 'src/app/components/select/select.component';
  import { DateComponent } from 'src/app/components/date/date.component';
  import { RadiobuttonComponent } from 'src/app/components/radiobutton/radiobutton.component';
  import { CheckboxComponent } from 'src/app/components/checkbox/checkbox.component';
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

  @NgModule({
    imports: [MaterialModule, CommonModule, NzModalModule, FormsModule, ReactiveFormsModule, NzInputModule,
      InputComponent,
      ButtonComponent,
      SelectComponent,
      DateComponent,
      RadiobuttonComponent,
      CheckboxComponent,
      TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })],
    declarations: [FormContainerComponent, DynamicFieldDirective, DynamicFormComponent],
    exports: [MaterialModule],
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
  export class FormContainerModule { }
*/
