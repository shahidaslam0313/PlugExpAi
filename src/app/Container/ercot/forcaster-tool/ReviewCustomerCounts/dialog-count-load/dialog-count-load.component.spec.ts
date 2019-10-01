import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCountLoadComponent } from './dialog-count-load.component';

describe('DialogCountLoadComponent', () => {
  let component: DialogCountLoadComponent;
  let fixture: ComponentFixture<DialogCountLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCountLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCountLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
