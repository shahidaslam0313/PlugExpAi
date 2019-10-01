import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewForwardPricesComponent } from './review-forward-prices.component';

describe('ReviewForwardPricesComponent', () => {
  let component: ReviewForwardPricesComponent;
  let fixture: ComponentFixture<ReviewForwardPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewForwardPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewForwardPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
