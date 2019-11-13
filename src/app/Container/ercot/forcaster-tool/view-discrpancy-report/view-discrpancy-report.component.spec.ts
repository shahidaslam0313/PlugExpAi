import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDiscrpancyReportComponent } from './view-discrpancy-report.component';

describe('ViewDiscrpancyReportComponent', () => {
  let component: ViewDiscrpancyReportComponent;
  let fixture: ComponentFixture<ViewDiscrpancyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDiscrpancyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDiscrpancyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
