import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewLSChannelCutsComponent } from './review-ls-channel-cuts.component';

describe('ReviewLSChannelCutsComponent', () => {
  let component: ReviewLSChannelCutsComponent;
  let fixture: ComponentFixture<ReviewLSChannelCutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewLSChannelCutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewLSChannelCutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
