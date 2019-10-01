import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFixedComponent } from './dialog-fixed.component';

describe('DialogFixedComponent', () => {
  let component: DialogFixedComponent;
  let fixture: ComponentFixture<DialogFixedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFixedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
