import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as formModels from 'src/app/_models/formModels';

@Component({
  standalone: true,
  selector: 'app-basic-form-models',
  templateUrl: './basic-form-models.component.html',
  styleUrls: ['./basic-form-models.component.scss'],
  imports: [CommonModule],
})
export class BasicFormModelsComponent {
  models = ["Characteristic Form", "Defect Form", "Defect Group Form", "Plan Master Form", "Process Form"];

  constructor() {}

  ngOnInit() {

  }
}
