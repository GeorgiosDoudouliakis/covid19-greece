import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenderPercentages } from '../../models/gender-percentages.model';
import { pluck } from 'rxjs/operators';

@Injectable()
export class GenderService {

  constructor(private http: HttpClient) { }

  getGenderCases(): Observable<GenderPercentages> {
    return this.http.get("https://covid-19-greece.herokuapp.com/gender-distribution").pipe(pluck('gender_percentages'));
  }
}