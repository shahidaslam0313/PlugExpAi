import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergySpikesComponent } from './energy-spikes.component';

describe('EnergySpikesComponent', () => {
  let component: EnergySpikesComponent;
  let fixture: ComponentFixture<EnergySpikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergySpikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergySpikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
