import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPowerOptionComponent } from './new-power-option.component';

describe('NewPowerOptionComponent', () => {
  let component: NewPowerOptionComponent;
  let fixture: ComponentFixture<NewPowerOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPowerOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPowerOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
