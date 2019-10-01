import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalPowerTradeOptionErcotComponent } from './physical-power-trade-option-ercot.component';

describe('PhysicalPowerTradeOptionErcotComponent', () => {
  let component: PhysicalPowerTradeOptionErcotComponent;
  let fixture: ComponentFixture<PhysicalPowerTradeOptionErcotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalPowerTradeOptionErcotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalPowerTradeOptionErcotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
