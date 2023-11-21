import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BlockUIModule } from 'ng-block-ui';
import { environment } from 'src/environments/environment';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { MaterialModule } from './material.module';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { DateComponent } from './components/date/date.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
//import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
//import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
//import { AuthModule } from './auth/auth.module';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);

  //return new TranslateHttpLoader(httpClient,
    //environment.feServerUrl + '/assets/i18n/', '.json');
}

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

export function translateFactory(translate: TranslateService) {
  return async () => {
    translate.setDefaultLang('it');
    translate.use('it')
        return new Promise<void>(resolve => {
            translate.onLangChange.subscribe(() => {
                resolve();
            });
        });
    };
}

/*function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'your-realm',
        clientId: 'your-client-id'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}*/

@NgModule({
  declarations: [
    AppComponent,
    //DynamicFieldDirective,
    //DynamicFormComponent,
    //DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    AppRoutingModule,
    //AuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    InputComponent,
    ButtonComponent,
    SelectComponent,
   // DynamicFieldDirective,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    KeycloakAngularModule,
    BlockUIModule.forRoot({
      message: 'Loading...'
    }),
    NzMenuModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
   /* {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },*/
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true
    },
  ],
  exports: [
    TranslateModule, NgZorroAntdModule, MaterialModule //DynamicFieldDirective,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent
  ],
*/
