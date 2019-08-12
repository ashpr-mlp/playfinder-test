import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { PitchTableComponent } from './pitch-table.component';



@NgModule({
  declarations: [PitchTableComponent],
  imports: [
    CommonModule,
    NgbTypeaheadModule
  ],
  exports: [
    PitchTableComponent
  ]
})
export class PitchTableModule { }
