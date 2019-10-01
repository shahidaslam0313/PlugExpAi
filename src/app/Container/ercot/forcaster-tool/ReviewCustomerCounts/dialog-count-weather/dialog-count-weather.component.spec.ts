import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCountWeatherComponent } from './dialog-count-weather.component';

describe('DialogCountWeatherComponent', () => {
  let component: DialogCountWeatherComponent;
  let fixture: ComponentFixture<DialogCountWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCountWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCountWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
