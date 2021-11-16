import { TestBed } from '@angular/core/testing';

import { PerRegionDataService } from './per-region-data.service';

describe('PerRegionDataService', () => {
  let service: PerRegionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerRegionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
