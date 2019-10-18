import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyEnergyComponent } from './weekly-energy.component';

describe('WeeklyEnergyComponent', () => {
  let component: WeeklyEnergyComponent;
  let fixture: ComponentFixture<WeeklyEnergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyEnergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
