import {Component} from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { environment } from 'src/environments/environment';

import {QuestionService} from './_services/question.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  //standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  providers: [QuestionService, AsyncPipe]
})
export class AppComponent {
  // Decorator wires up blockUI instance
  @BlockUI()
  blockUI!: NgBlockUI;

  isCollapsed = false;
  title: string = 'Dynamic Form';

  constructor(public translate: TranslateService, public questionService: QuestionService) {
    translate.addLangs(environment.arrayLangs);
    this.translate.setDefaultLang(environment.defaultLang);
    this.translate.use(environment.defaultLang)
  }

  // Funzione per ottenere i dati dal servizio condiviso
  ngOnInit(): void {}
}

/*
  questions$: Observable<QuestionBase<any>[]> = of([]);
  formKind: string = 'characteristicForm';

  this.blockUI.start('Loading...'); // Start blocking
  setTimeout(() => {
    this.blockUI.stop(); // Stop blocking
  }, 2000);
*/
