import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
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
}