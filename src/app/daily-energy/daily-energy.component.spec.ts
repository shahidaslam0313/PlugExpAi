import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyEnergyComponent } from './daily-energy.component';

describe('DailyEnergyComponent', () => {
  let component: DailyEnergyComponent;
  let fixture: ComponentFixture<DailyEnergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyEnergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
