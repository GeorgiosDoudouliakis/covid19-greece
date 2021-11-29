import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenderPercentages } from '../../models/gender-percentages.model';
import { pluck } from 'rxjs/operators';

@Injectable()
export class OverallStatsService {
  constructor(private http: HttpClient) { }

  getConfirmedCases() {
    return this.http.get("https://covid-19-greece.herokuapp.com/confirmed");
  }

  getRecoveredCases() {
    return this.http.get("https://covid-19-greece.herokuapp.com/recovered");
  }

  getDeathCases() {
    return this.http.get("https://covid-19-greece.herokuapp.com/deaths");
  }

  getActiveCases() {
    return this.http.get("https://covid-19-greece.herokuapp.com/active");
  }

  getIntensiveCareCases() {
    return this.http.get("https://covid-19-greece.herokuapp.com/intensive-care");
  }

  getTotalTests() {
    return this.http.get("https://covid-19-greece.herokuapp.com/total-tests");
  }

  getGenderCases(): Observable<GenderPercentages> {
    return this.http.get("https://covid-19-greece.herokuapp.com/gender-distribution").pipe(pluck('gender_percentages'));
  }
}