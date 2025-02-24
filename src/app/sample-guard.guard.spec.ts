import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sampleGuardGuard } from './sample-guard.guard';

describe('sampleGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sampleGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
