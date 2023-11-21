import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule, MatDatepickerToggle} from '@angular/material/datepicker';
import {MatNativeDateModule, MAT_DATE_LOCALE, MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
//import { MatMomentDateModule } from "@angular/material/";

@NgModule({
    imports: [
      CommonModule,
      MatButtonModule,
      MatIconModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatListModule,
      MatDatepickerModule,
      MatNativeDateModule,
     // MatMomentDateModule,
      MatProgressSpinnerModule,
      MatToolbarModule,
      MatSnackBarModule,
      MatSelectModule,
      MatOptionModule,
      MatCheckboxModule,
      MatRadioModule
    ],
    exports: [
      MatButtonModule,
      MatIconModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatListModule,
      MatDatepickerModule,
      MatNativeDateModule,
     // MatMomentDateModule,
      MatProgressSpinnerModule,
      MatToolbarModule,
      MatSnackBarModule,
      MatDatepickerToggle,
      MatSelectModule,
      MatOptionModule,
      MatCheckboxModule,
      MatRadioModule
    ]
})
export class MaterialModule {}
