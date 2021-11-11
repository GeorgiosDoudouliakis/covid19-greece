import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class LatestCovidNewsService {
  private readonly apiKey = '8fcd4ec1a94890ff2fbe58752baf2f59';

  constructor(private http: HttpClient) { }

  getCovidNews(limit: number = 3): Observable<News> {
    const params = new HttpParams().set("keywords", "covid").set("languages","en")
    return this.http.get<News>(`http://api.mediastack.com/v1/news?access_key=${this.apiKey}&limit=${limit}`, { params });
  }
}