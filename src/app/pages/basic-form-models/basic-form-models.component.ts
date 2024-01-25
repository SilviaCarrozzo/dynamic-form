import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import * as formModels from 'src/app/_models/formModels';
import { QuestionService } from 'src/app/_services/question.service';

@Component({
  standalone: true,
  selector: 'app-basic-form-models',
  templateUrl: './basic-form-models.component.html',
  styleUrls: ['./basic-form-models.component.scss'],
  imports: [CommonModule, RouterModule, TranslateModule],
  providers: [TranslatePipe]
})
export class BasicFormModelsComponent {
  formModels : string[] = formModels.models;
  listOfControl: Array<{ id: number; controlInstance: string }> = [];

  constructor(public questionService: QuestionService) {}

  ngOnInit() {
  }

  addForm(e?: MouseEvent): void {
    e?.preventDefault();

    const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `additional${id}`
    };
    const index = this.listOfControl.push(control);
    console.log(this.listOfControl[this.listOfControl.length - 1]);
    this.formModels.push(
      this.listOfControl[index - 1].controlInstance,
    );
  }

  removeForm(e: MouseEvent): void {//i: { id: number; controlInstance: string },
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.formModels.length - 1; //this.listOfControl.indexOf(e.);
      this.listOfControl.splice(index, 1);
      console.log(this.listOfControl);
      this.formModels.splice(index, 1);
    }
  }
}
