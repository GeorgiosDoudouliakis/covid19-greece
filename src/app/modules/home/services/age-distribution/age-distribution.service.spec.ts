import { TestBed } from '@angular/core/testing';

import { AgeDistributionService } from './age-distribution.service';

describe('AgeDistributionService', () => {
  let service: AgeDistributionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgeDistributionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
