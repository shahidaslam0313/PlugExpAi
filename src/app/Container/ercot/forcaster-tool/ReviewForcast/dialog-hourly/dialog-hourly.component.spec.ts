import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHourlyComponent } from './dialog-hourly.component';

describe('DialogHourlyComponent', () => {
  let component: DialogHourlyComponent;
  let fixture: ComponentFixture<DialogHourlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogHourlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogHourlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
