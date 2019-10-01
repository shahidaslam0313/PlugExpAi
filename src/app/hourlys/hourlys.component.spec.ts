import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlysComponent } from './hourlys.component';

describe('HourlysComponent', () => {
  let component: HourlysComponent;
  let fixture: ComponentFixture<HourlysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
