import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherzoneActualComponent } from './weatherzone-actual.component';

describe('WeatherzoneActualComponent', () => {
  let component: WeatherzoneActualComponent;
  let fixture: ComponentFixture<WeatherzoneActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherzoneActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherzoneActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
