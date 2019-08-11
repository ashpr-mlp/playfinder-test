import { createTestComponentFactory, Spectator } from '@netbasal/spectator';

import { PitchSearchInputComponent } from './pitch-search-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { tick, fakeAsync } from '@angular/core/testing';

describe('PitchSearchInputComponent', () => {
  let host: Spectator<PitchSearchInputComponent>;
  const createHost = createTestComponentFactory({
    imports: [
      ReactiveFormsModule
    ],
    component: PitchSearchInputComponent
  });

  beforeEach(async () => {
    host = createHost();

    await host.fixture.whenStable();
  });

  it('should create', () => {
    expect(host.component).toBeTruthy();
  });

  describe('ngOnChanges', () => {
    describe('when filters input changes', () => {
      const changes = {sport: 'foo', format: 'bar'};
      let changedTo;

      beforeEach(() => {
        changedTo = undefined;

        host.component.searchForm.valueChanges.subscribe(changedToValue => changedTo = changedToValue);
        host.component.ngOnChanges({filters: {currentValue: changes}} as any);
      });


      it('should populate form with changes', () => {
        expect(changedTo).toEqual(changes);

        expect(host.queryLast('.pitch-search-input__sport-input')).toHaveValue('foo');
        expect(host.queryLast('.pitch-search-input__format-input')).toHaveValue('bar');
      });
    });
  });
});
