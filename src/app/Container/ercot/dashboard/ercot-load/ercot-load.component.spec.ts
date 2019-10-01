import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErcotLoadComponent } from './ercot-load.component';

describe('ErcotLoadComponent', () => {
  let component: ErcotLoadComponent;
  let fixture: ComponentFixture<ErcotLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErcotLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErcotLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
