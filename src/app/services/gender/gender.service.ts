import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private http: HttpClient) { }

  getGenderCases() {
    return this.http.get("https://covid-19-greece.herokuapp.com/gender-distribution");
  }
}