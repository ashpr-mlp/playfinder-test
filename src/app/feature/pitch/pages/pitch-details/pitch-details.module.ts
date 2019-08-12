import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PitchDetailsPageComponent } from './pitch-details.component';
import { PitchDetailsModule } from '../../components/pitch-details/pitch-details.module';



@NgModule({
  declarations: [PitchDetailsPageComponent],
  imports: [
    CommonModule,
    PitchDetailsModule
  ]
})
export class PitchDetailsPageModule { }
