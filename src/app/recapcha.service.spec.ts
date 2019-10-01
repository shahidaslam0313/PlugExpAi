import { TestBed } from '@angular/core/testing';

import { RecapchaService } from './recapcha.service';

describe('RecapchaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecapchaService = TestBed.get(RecapchaService);
    expect(service).toBeTruthy();
  });
});
