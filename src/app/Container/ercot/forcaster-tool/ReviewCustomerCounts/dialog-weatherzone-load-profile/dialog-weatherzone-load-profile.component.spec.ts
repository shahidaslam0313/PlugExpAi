import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWeatherzoneLoadProfileComponent } from './dialog-weatherzone-load-profile.component';

describe('DialogWeatherzoneLoadProfileComponent', () => {
  let component: DialogWeatherzoneLoadProfileComponent;
  let fixture: ComponentFixture<DialogWeatherzoneLoadProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogWeatherzoneLoadProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWeatherzoneLoadProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
