import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSelectionUsageMeterComponent } from './dialog-selection-usage-meter.component';

describe('DialogSelectionUsageMeterComponent', () => {
  let component: DialogSelectionUsageMeterComponent;
  let fixture: ComponentFixture<DialogSelectionUsageMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSelectionUsageMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSelectionUsageMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
