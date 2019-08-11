import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { PitchFilter } from 'src/app/shared';
import { FormGroup, FormControl } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs/operators';

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
  @Output() filtersChanged = this.searchForm.valueChanges.pipe(distinctUntilChanged());

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.filters) {
      this.searchForm.setValue(changes.filters.currentValue);
    }
  }
}
