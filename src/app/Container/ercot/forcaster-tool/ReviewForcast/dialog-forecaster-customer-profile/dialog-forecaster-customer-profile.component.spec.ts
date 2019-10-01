import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForecasterCustomerProfileComponent } from './dialog-forecaster-customer-profile.component';

describe('DialogForecasterCustomerProfileComponent', () => {
  let component: DialogForecasterCustomerProfileComponent;
  let fixture: ComponentFixture<DialogForecasterCustomerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogForecasterCustomerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogForecasterCustomerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
