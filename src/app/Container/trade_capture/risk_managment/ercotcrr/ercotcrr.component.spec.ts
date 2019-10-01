import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ERCOTCRRComponent } from './ercotcrr.component';

describe('ERCOTCRRComponent', () => {
  let component: ERCOTCRRComponent;
  let fixture: ComponentFixture<ERCOTCRRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ERCOTCRRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ERCOTCRRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
