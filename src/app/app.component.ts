import {Component} from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
//import { KeycloakService } from 'keycloak-angular';
// Import BlockUI decorator & optional NgBlockUI type
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { environment } from 'src/environments/environment';


import {QuestionService} from './_services/question.service';
import {QuestionBase} from './question-base';
import {Observable} from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  //standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [QuestionService, AsyncPipe],
  //imports: [CommonModule, DynamicFormComponent]
})
export class AppComponent {
  // Decorator wires up blockUI instance
  @BlockUI()
  blockUI!: NgBlockUI;

  isCollapsed = false;
  title: string = 'Dynamic Form'
  questions$: Observable<QuestionBase<any>[]>;


  constructor(public translate: TranslateService, service: QuestionService) {
    translate.addLangs(environment.arrayLangs);
    this.translate.setDefaultLang(environment.defaultLang);
    this.translate.use(environment.defaultLang)
    this.questions$ = service.getQuestions();
    this.blockUI.start('Loading...'); // Start blocking

    setTimeout(() => {
      this.blockUI.stop(); // Stop blocking
    }, 2000);
  }

  // Funzione per ottenere i dati dal servizio condiviso
  ngOnInit(): void {
  }
}
