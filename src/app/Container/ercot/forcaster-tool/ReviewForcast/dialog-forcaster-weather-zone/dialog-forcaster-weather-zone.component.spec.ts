import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForcasterWeatherZoneComponent } from './dialog-forcaster-weather-zone.component';

describe('DialogForcasterWeatherZoneComponent', () => {
  let component: DialogForcasterWeatherZoneComponent;
  let fixture: ComponentFixture<DialogForcasterWeatherZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogForcasterWeatherZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogForcasterWeatherZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
