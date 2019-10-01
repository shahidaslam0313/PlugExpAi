import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRRsComponent } from './crrs.component';

describe('CRRsComponent', () => {
  let component: CRRsComponent;
  let fixture: ComponentFixture<CRRsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRRsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRRsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
