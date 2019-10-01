import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratepowercounterpartyinovicesComponent } from './generatepowercounterpartyinovices.component';

describe('GeneratepowercounterpartyinovicesComponent', () => {
  let component: GeneratepowercounterpartyinovicesComponent;
  let fixture: ComponentFixture<GeneratepowercounterpartyinovicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratepowercounterpartyinovicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratepowercounterpartyinovicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
