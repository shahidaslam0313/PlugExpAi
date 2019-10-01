import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRRComponent } from './crr.component';

describe('CRRComponent', () => {
  let component: CRRComponent;
  let fixture: ComponentFixture<CRRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
