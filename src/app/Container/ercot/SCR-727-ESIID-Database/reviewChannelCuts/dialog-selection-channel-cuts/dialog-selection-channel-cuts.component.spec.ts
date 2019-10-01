import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSelectionChannelCutsComponent } from './dialog-selection-channel-cuts.component';

describe('DialogSelectionChannelCutsComponent', () => {
  let component: DialogSelectionChannelCutsComponent;
  let fixture: ComponentFixture<DialogSelectionChannelCutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSelectionChannelCutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSelectionChannelCutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
