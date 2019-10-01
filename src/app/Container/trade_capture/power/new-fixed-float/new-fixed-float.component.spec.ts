import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFixedFloatComponent } from './new-fixed-float.component';

describe('NewFixedFloatComponent', () => {
  let component: NewFixedFloatComponent;
  let fixture: ComponentFixture<NewFixedFloatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFixedFloatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFixedFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
