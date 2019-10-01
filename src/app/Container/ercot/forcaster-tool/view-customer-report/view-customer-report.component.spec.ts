import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerReportComponent } from './view-customer-report.component';

describe('ViewCustomerReportComponent', () => {
  let component: ViewCustomerReportComponent;
  let fixture: ComponentFixture<ViewCustomerReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCustomerReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
