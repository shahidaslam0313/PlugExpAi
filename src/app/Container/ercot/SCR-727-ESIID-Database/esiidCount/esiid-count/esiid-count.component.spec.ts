import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsiidCountComponent } from './esiid-count.component';

describe('EsiidCountComponent', () => {
  let component: EsiidCountComponent;
  let fixture: ComponentFixture<EsiidCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsiidCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsiidCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
