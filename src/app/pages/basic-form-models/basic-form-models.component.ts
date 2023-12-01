import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as formModels from 'src/app/_models/formModels';

interface FormModel {
  id: string;
  label: string;
  //key: string; // Ensure that 'key' property is defined in your interface
}

@Component({
  standalone: true,
  selector: 'app-basic-form-models',
  templateUrl: './basic-form-models.component.html',
  styleUrls: ['./basic-form-models.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class BasicFormModelsComponent {
  formModels : FormModel[] = [
    {id: "characteristicForm", label: "Characteristic Form"},
    {id: "planForm", label: "Plan Master Form"},
    {id: "processForm", label: "Process Form"},
    {id: "defectForm", label: "Defect Form"},
    {id: "defectGroupForm", label: "Defect Group Form"}
  ];

  constructor() {}

  ngOnInit() {

  }
}
