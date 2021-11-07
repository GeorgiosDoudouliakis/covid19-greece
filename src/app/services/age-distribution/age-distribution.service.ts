import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { AgeDistribution } from 'src/app/models/age-distribution.model';

@Injectable({
  providedIn: 'root'
})
export class AgeDistributionService {

  constructor(private http: HttpClient) { }

  getAgeDistributionCases(): Observable<AgeDistribution> {
    return this.http.get("https://covid-19-greece.herokuapp.com/age-distribution").pipe(pluck('age_distribution'));
  }
}