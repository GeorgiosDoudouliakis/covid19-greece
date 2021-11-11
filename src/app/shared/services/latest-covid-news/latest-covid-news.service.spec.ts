import { TestBed } from '@angular/core/testing';

import { LatestCovidNewsService } from './latest-covid-news.service';

describe('LatestCovidNewsService', () => {
  let service: LatestCovidNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestCovidNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
