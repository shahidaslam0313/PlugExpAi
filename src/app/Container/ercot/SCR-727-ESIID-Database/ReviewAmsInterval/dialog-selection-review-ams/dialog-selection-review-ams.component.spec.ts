import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSelectionReviewAmsComponent } from './dialog-selection-review-ams.component';

describe('DialogSelectionReviewAmsComponent', () => {
  let component: DialogSelectionReviewAmsComponent;
  let fixture: ComponentFixture<DialogSelectionReviewAmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSelectionReviewAmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSelectionReviewAmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
