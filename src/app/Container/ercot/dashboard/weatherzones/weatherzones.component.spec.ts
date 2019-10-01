import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherzonesComponent } from './weatherzones.component';

describe('WeatherzonesComponent', () => {
  let component: WeatherzonesComponent;
  let fixture: ComponentFixture<WeatherzonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherzonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherzonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
