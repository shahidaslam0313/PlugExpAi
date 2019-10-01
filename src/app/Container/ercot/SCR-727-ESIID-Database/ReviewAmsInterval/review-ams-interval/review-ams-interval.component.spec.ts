import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAmsIntervalComponent } from './review-ams-interval.component';

describe('ReviewAmsIntervalComponent', () => {
  let component: ReviewAmsIntervalComponent;
  let fixture: ComponentFixture<ReviewAmsIntervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewAmsIntervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewAmsIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
