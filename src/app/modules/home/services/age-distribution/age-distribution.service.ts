import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { AgeDistribution } from '../../models/age-distribution.model';

@Injectable()
export class AgeDistributionService {
  constructor(private http: HttpClient) { }

  getAgeDistributionCases(): Observable<AgeDistribution> {
    return this.http.get("https://covid-19-greece.herokuapp.com/age-distribution").pipe(pluck('age_distribution'));
  }
}