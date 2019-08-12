import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { PitchFilter, Pitch } from 'src/app/shared';
import { FormGroup, FormControl } from '@angular/forms';
import { distinctUntilChanged, skip } from 'rxjs/operators';

@Component({
  selector: 'app-pitch-search-input',
  templateUrl: './pitch-search-input.component.html',
  styleUrls: ['./pitch-search-input.component.scss']
})
export class PitchSearchInputComponent implements OnChanges {

  public readonly searchForm = new FormGroup({
    sport: new FormControl(''),
    format: new FormControl('')
  });

  @Input() filters: Partial<PitchFilter>;
  @Output() filtersChanged = this.searchForm.valueChanges.pipe(distinctUntilChanged(this.compare), skip(1));

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.filters) {
      const newFilters = changes.filters.currentValue;

      this.searchForm.setValue({
        sport: newFilters.sport || '',
        format: newFilters.format || ''
      });
    }
  }

  compare(a: Partial<PitchFilter>, b: Partial<PitchFilter>): boolean {
    return JSON.stringify(a) === JSON.stringify(b);
  }
}
