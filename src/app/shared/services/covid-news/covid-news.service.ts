import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class CovidNewsService {
  private readonly apiKey = '9cd9fac8c8e8487f90103d97de7b4140';

  constructor(private http: HttpClient) { }

  getCovidNews(country: string = 'gr'): Observable<News> {
    const params = new HttpParams()
                  .set('country', country)
                  .set('apiKey', this.apiKey)
                  .set('category', 'health')
                  .set('q', 'COVID-19')
    return this.http.get<News>('https://newsapi.org/v2/top-headlines', { params });
  }
}