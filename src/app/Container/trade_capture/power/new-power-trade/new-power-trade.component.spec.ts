import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPowerTradeComponent } from './new-power-trade.component';

describe('NewPowerTradeComponent', () => {
  let component: NewPowerTradeComponent;
  let fixture: ComponentFixture<NewPowerTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPowerTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPowerTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
