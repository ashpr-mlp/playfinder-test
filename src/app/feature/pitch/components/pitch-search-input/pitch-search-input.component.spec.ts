import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchSearchInputComponent } from './pitch-search-input.component';

describe('PitchSearchInputComponent', () => {
  let component: PitchSearchInputComponent;
  let fixture: ComponentFixture<PitchSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
