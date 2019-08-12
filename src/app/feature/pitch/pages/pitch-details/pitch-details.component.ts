import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, map, switchMap } from 'rxjs/operators';
import { PitchService } from 'src/app/shared';

@Component({
  selector: 'app-pitch-details-page',
  templateUrl: './pitch-details.component.html',
  styleUrls: ['./pitch-details.component.scss']
})
export class PitchDetailsPageComponent {

  public readonly pitchId$ = this.route.params
    .pipe(
      pluck('id'),
      map(id => parseInt(id, 10))
    );

  public readonly pitch$ = this.pitchId$
    .pipe(switchMap(pitchId => {
      return this.pitchService.fetchOne(pitchId);
    }));

  constructor(private route: ActivatedRoute, private pitchService: PitchService) { }

}
