import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCustomerAccountComponent } from './import-customer-account.component';

describe('ImportCustomerAccountComponent', () => {
  let component: ImportCustomerAccountComponent;
  let fixture: ComponentFixture<ImportCustomerAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportCustomerAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportCustomerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
