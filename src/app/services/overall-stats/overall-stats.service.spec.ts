import { TestBed } from '@angular/core/testing';

import { OverallStatsService } from './overall-stats.service';

describe('OverallStatsService', () => {
  let service: OverallStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverallStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
