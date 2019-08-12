import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PitchDetailsComponent } from './pitch-details.component';



@NgModule({
  declarations: [PitchDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PitchDetailsComponent
  ]
})
export class PitchDetailsModule { }
