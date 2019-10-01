import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadForecastComponent } from './load-forecast.component';

describe('LoadForecastComponent', () => {
  let component: LoadForecastComponent;
  let fixture: ComponentFixture<LoadForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
