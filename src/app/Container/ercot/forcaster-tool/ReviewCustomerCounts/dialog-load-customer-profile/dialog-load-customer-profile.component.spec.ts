import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoadCustomerProfileComponent } from './dialog-load-customer-profile.component';

describe('DialogLoadCustomerProfileComponent', () => {
  let component: DialogLoadCustomerProfileComponent;
  let fixture: ComponentFixture<DialogLoadCustomerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLoadCustomerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLoadCustomerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
