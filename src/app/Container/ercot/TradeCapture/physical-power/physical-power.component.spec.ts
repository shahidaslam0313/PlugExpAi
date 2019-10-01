import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalPowerComponent } from './physical-power.component';

describe('PhysicalPowerComponent', () => {
  let component: PhysicalPowerComponent;
  let fixture: ComponentFixture<PhysicalPowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalPowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
