import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { News } from '../../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class CovidNewsService {
  private country$ = new BehaviorSubject<string>('gr');
  private page$ = new BehaviorSubject<number>(1);
  private readonly apiKey = '9cd9fac8c8e8487f90103d97de7b4140';
  countryHandler = this.country$.asObservable();
  pageHandler = this.page$.asObservable();

  constructor(private http: HttpClient) { }

  getCovidNews(country: string = 'gr', page: number = 1): Observable<News> {
    const params = new HttpParams()
                  .set('country', country)
                  .set('apiKey', this.apiKey)
                  .set('category', 'health')
                  .set('q', 'COVID-19')
                  .set('page', page)
    return this.http.get<News>('https://newsapi.org/v2/top-headlines', { params });
  }

  countryAction(country: string) {
    return this.country$.next(country);
  }

  pageAction(page: number) {
    return this.page$.next(page);
  }
}