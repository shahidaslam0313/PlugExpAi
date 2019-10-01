import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewcounterpartyinovicesComponent } from './reviewcounterpartyinovices.component';

describe('ReviewcounterpartyinovicesComponent', () => {
  let component: ReviewcounterpartyinovicesComponent;
  let fixture: ComponentFixture<ReviewcounterpartyinovicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewcounterpartyinovicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewcounterpartyinovicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
