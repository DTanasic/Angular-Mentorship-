import { TestBed } from '@angular/core/testing';

import { SafeFilterGuard } from './safe-filter.guard';

describe('SafeFilterGuard', () => {
  let guard: SafeFilterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SafeFilterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
