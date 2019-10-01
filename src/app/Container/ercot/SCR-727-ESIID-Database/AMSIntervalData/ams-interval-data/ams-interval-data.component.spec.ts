import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmsIntervalDataComponent } from './ams-interval-data.component';

describe('AmsIntervalDataComponent', () => {
  let component: AmsIntervalDataComponent;
  let fixture: ComponentFixture<AmsIntervalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmsIntervalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmsIntervalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
