import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PitchSearchPageComponent } from './pitch-search.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PitchTableModule } from '../../components/pitch-table/pitch-table.module';
import { PitchSearchInputModule } from '../../components/pitch-search-input/pitch-search-input.module';



@NgModule({
  declarations: [PitchSearchPageComponent],
  imports: [
    CommonModule,
    NgbPaginationModule,
    PitchTableModule,
    PitchSearchInputModule
  ],
  exports: [
    PitchSearchPageComponent
  ]
})
export class PitchSearchPageModule { }
