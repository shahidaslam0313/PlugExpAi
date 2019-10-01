import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoadProfileComponent } from './dialog-load-profile.component';

describe('DialogLoadProfileComponent', () => {
  let component: DialogLoadProfileComponent;
  let fixture: ComponentFixture<DialogLoadProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLoadProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLoadProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
