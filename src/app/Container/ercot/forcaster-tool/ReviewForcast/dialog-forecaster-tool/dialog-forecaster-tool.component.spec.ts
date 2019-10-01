import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForecasterToolComponent } from './dialog-forecaster-tool.component';

describe('DialogForecasterToolComponent', () => {
  let component: DialogForecasterToolComponent;
  let fixture: ComponentFixture<DialogForecasterToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogForecasterToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogForecasterToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
