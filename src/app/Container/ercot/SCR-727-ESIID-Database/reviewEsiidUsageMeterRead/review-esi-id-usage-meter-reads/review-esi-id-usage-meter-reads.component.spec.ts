import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewEsiIdUsageMeterReadsComponent } from './review-esi-id-usage-meter-reads.component';

describe('ReviewEsiIdUsageMeterReadsComponent', () => {
  let component: ReviewEsiIdUsageMeterReadsComponent;
  let fixture: ComponentFixture<ReviewEsiIdUsageMeterReadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewEsiIdUsageMeterReadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewEsiIdUsageMeterReadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
