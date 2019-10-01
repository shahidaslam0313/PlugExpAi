import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewMTMTradeValuationsComponent } from './review-mtmtrade-valuations.component';

describe('ReviewMTMTradeValuationsComponent', () => {
  let component: ReviewMTMTradeValuationsComponent;
  let fixture: ComponentFixture<ReviewMTMTradeValuationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewMTMTradeValuationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewMTMTradeValuationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
