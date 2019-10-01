import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewEsiIdServiceHistoryComponent } from './review-esi-id-service-history.component';

describe('ReviewEsiIdServiceHistoryComponent', () => {
  let component: ReviewEsiIdServiceHistoryComponent;
  let fixture: ComponentFixture<ReviewEsiIdServiceHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewEsiIdServiceHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewEsiIdServiceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
