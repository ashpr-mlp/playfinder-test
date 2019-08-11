import { Component, Input } from '@angular/core';
import { Pitch } from 'src/app/shared';

@Component({
  selector: 'app-pitch-table',
  templateUrl: './pitch-table.component.html',
  styleUrls: ['./pitch-table.component.scss']
})
export class PitchTableComponent {

  @Input() pitches: Pitch[];

}
