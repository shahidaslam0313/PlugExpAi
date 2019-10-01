import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsiidDiscrepancyComponent } from './esiid-discrepancy.component';

describe('EsiidDiscrepancyComponent', () => {
  let component: EsiidDiscrepancyComponent;
  let fixture: ComponentFixture<EsiidDiscrepancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsiidDiscrepancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsiidDiscrepancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
