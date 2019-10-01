import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewNotionalValuationsComponent } from './review-notional-valuations.component';

describe('ReviewNotionalValuationsComponent', () => {
  let component: ReviewNotionalValuationsComponent;
  let fixture: ComponentFixture<ReviewNotionalValuationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewNotionalValuationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewNotionalValuationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
