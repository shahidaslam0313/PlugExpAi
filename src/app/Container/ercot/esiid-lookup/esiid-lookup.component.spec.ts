import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsiidLookupComponent } from './esiid-lookup.component';

describe('EsiidLookupComponent', () => {
  let component: EsiidLookupComponent;
  let fixture: ComponentFixture<EsiidLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsiidLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsiidLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
