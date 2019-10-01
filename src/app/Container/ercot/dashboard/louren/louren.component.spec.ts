import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LourenComponent } from './louren.component';

describe('LourenComponent', () => {
  let component: LourenComponent;
  let fixture: ComponentFixture<LourenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LourenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LourenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
