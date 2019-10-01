import { TestBed } from '@angular/core/testing';

import { SharedMethodService  } from './sharedmethods.service';

describe('SharedmethodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedMethodService  = TestBed.get(SharedMethodService );
    expect(service).toBeTruthy();
  });
});
