import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchSearchComponent } from './pitch-search.component';

describe('PitchSearchComponent', () => {
  let component: PitchSearchComponent;
  let fixture: ComponentFixture<PitchSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
