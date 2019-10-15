import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyWasteComponent } from './energy-waste.component';

describe('EnergyWasteComponent', () => {
  let component: EnergyWasteComponent;
  let fixture: ComponentFixture<EnergyWasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyWasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
