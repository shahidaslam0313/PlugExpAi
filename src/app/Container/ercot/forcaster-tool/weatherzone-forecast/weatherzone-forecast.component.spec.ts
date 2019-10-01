import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherzoneForecastComponent } from './weatherzone-forecast.component';

describe('WeatherzoneForecastComponent', () => {
  let component: WeatherzoneForecastComponent;
  let fixture: ComponentFixture<WeatherzoneForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherzoneForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherzoneForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
