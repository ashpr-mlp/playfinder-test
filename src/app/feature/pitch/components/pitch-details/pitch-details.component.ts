import { Component, Input } from '@angular/core';
import { Pitch } from 'src/app/shared';

@Component({
  selector: 'app-pitch-details',
  templateUrl: './pitch-details.component.html',
  styleUrls: ['./pitch-details.component.scss']
})
export class PitchDetailsComponent {

  @Input() pitch: Pitch;

}
