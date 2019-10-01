import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlysComponent } from './monthlys.component';

describe('MonthlysComponent', () => {
  let component: MonthlysComponent;
  let fixture: ComponentFixture<MonthlysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
