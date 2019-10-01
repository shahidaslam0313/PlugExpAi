import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCustomerCountComponent } from './review-customer-count.component';

describe('ReviewCustomerCountComponent', () => {
  let component: ReviewCustomerCountComponent;
  let fixture: ComponentFixture<ReviewCustomerCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewCustomerCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCustomerCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
