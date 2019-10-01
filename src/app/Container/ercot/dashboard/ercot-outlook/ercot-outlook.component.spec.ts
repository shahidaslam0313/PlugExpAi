import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErcotOutlookComponent } from './ercot-outlook.component';

describe('ErcotOutlookComponent', () => {
  let component: ErcotOutlookComponent;
  let fixture: ComponentFixture<ErcotOutlookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErcotOutlookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErcotOutlookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
