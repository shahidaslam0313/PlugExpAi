import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockGraphsComponent } from './block-graphs.component';

describe('BlockGraphsComponent', () => {
  let component: BlockGraphsComponent;
  let fixture: ComponentFixture<BlockGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
