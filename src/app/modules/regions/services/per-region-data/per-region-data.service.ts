import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { Region } from '../../models/region.model';

@Injectable({
  providedIn: 'root'
})
export class PerRegionDataService {

  constructor(private http: HttpClient) { }

  getPerRegionData() {
    return this.http.get<{ regions: Region[] }>("https://covid-19-greece.herokuapp.com/regions").pipe(pluck("regions"));
  }
}
