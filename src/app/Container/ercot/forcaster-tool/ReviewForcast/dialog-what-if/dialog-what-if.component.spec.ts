import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWhatIfComponent } from './dialog-what-if.component';

describe('DialogWhatIfComponent', () => {
  let component: DialogWhatIfComponent;
  let fixture: ComponentFixture<DialogWhatIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogWhatIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWhatIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
