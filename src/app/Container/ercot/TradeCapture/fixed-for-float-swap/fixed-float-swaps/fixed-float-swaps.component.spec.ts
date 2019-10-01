import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedFloatSwapsComponent } from './fixed-float-swaps.component';

describe('FixedFloatSwapsComponent', () => {
  let component: FixedFloatSwapsComponent;
  let fixture: ComponentFixture<FixedFloatSwapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedFloatSwapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedFloatSwapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
