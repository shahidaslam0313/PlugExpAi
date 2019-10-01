import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewuninvoicedactivityreportsComponent } from './reviewuninvoicedactivityreports.component';

describe('ReviewuninvoicedactivityreportsComponent', () => {
  let component: ReviewuninvoicedactivityreportsComponent;
  let fixture: ComponentFixture<ReviewuninvoicedactivityreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewuninvoicedactivityreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewuninvoicedactivityreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
