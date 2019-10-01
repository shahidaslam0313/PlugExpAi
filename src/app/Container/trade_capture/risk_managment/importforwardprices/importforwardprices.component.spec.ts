import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportforwardpricesComponent } from './importforwardprices.component';

describe('ImportforwardpricesComponent', () => {
  let component: ImportforwardpricesComponent;
  let fixture: ComponentFixture<ImportforwardpricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportforwardpricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportforwardpricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
