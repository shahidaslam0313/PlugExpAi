import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaturityForcastComponent } from './maturity-forcast.component';

describe('MaturityForcastComponent', () => {
  let component: MaturityForcastComponent;
  let fixture: ComponentFixture<MaturityForcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaturityForcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaturityForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
