import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck, map, switchMap, shareReplay, debounceTime, tap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { PitchService, PitchFilter, Pitch } from 'src/app/shared';

enum PitchSearchPageComponentParams {
  SportFliter = 'filters.sport',
  FormatFilter = 'filters.format',
  PageNumber = 'page.number',
  PageSize = 'page.size'
}

@Component({
  selector: 'app-pitch-search-page',
  templateUrl: './pitch-search.component.html',
  styleUrls: ['./pitch-search.component.scss']
})
export class PitchSearchPageComponent {

  public loading = false;
  public readonly DefaultPageNumber = 1;
  public readonly DefaultPageSize = 10;

  public readonly filters$ = this.route.queryParams
  .pipe(
    map(params => {
      return {
        sport: params[PitchSearchPageComponentParams.SportFliter],
        format: params[PitchSearchPageComponentParams.FormatFilter]
      } as PitchFilter;
    })
  );

  public readonly pageNumber$ = this.route.queryParams.pipe(
    pluck(PitchSearchPageComponentParams.PageNumber),
    map(val => parseInt(val, 10) || this.DefaultPageNumber)
  );

  public readonly pageSize$ = this.route.queryParams.pipe(
    pluck(PitchSearchPageComponentParams.PageSize),
    map(val => parseInt(val, 10) || this.DefaultPageSize)
  );

  public readonly pitches$ = combineLatest(this.filters$, this.pageNumber$, this.pageSize$)
    .pipe(debounceTime(500))
    .pipe(switchMap(([filters, pageNumber, pageSize]) => {
      this.loading = true;

      return this.pitchService.fetchAll({number: pageNumber, size: pageSize}, filters);
    }))
    .pipe(tap(() => this.loading = false))
    .pipe(shareReplay());

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pitchService: PitchService
  ) {}

  public setFilters(filters: PitchFilter) {
    this.router.navigate(['.'], {
      queryParams: {
        [PitchSearchPageComponentParams.PageNumber]: 1,
        [PitchSearchPageComponentParams.FormatFilter]: filters.format,
        [PitchSearchPageComponentParams.SportFliter]: filters.sport,
      },
      queryParamsHandling: 'merge'
    });

  }

  public setPage(pageNumber: number) {
    this.router.navigate(['.'], {
      queryParams: {
        [PitchSearchPageComponentParams.PageNumber]: pageNumber
      },
      queryParamsHandling: 'merge'
    });
  }

  public goToPitch(pitch: Pitch) {
    this.router.navigate([`../pitch/${pitch.id}`], {relativeTo: this.route});
  }

}
