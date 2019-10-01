import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecasterToolComponent } from './forecaster-tool.component';

describe('ForecasterToolComponent', () => {
  let component: ForecasterToolComponent;
  let fixture: ComponentFixture<ForecasterToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecasterToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecasterToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
