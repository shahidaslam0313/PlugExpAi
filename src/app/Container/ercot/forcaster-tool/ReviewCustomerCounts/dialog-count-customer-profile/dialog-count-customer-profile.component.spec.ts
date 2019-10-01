import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCountCustomerProfileComponent } from './dialog-count-customer-profile.component';

describe('DialogCountCustomerProfileComponent', () => {
  let component: DialogCountCustomerProfileComponent;
  let fixture: ComponentFixture<DialogCountCustomerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCountCustomerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCountCustomerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
