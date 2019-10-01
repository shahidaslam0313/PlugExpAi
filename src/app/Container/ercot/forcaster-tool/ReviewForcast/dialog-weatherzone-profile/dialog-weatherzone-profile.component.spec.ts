import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWeatherzoneProfileComponent } from './dialog-weatherzone-profile.component';

describe('DialogWeatherzoneProfileComponent', () => {
  let component: DialogWeatherzoneProfileComponent;
  let fixture: ComponentFixture<DialogWeatherzoneProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogWeatherzoneProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWeatherzoneProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
