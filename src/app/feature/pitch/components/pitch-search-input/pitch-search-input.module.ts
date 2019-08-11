import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PitchSearchInputComponent } from './pitch-search-input.component';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PitchSearchInputComponent],
  exports: [
    PitchSearchInputComponent
  ]
})
export class PitchSearchInputModule { }
