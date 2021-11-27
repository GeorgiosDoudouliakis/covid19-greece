import { Component, OnInit } from '@angular/core';
import { Article } from '@shared/models/news.model';
import { CovidNewsService } from '@shared/services/covid-news/covid-news.service';
import { combineLatest, Observable } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  articles$: Observable<Article[]>;

  constructor(private covidNewsService: CovidNewsService) { }

  ngOnInit(): void {
    this.articles$ = combineLatest([
      this.covidNewsService.countryHandler,
      this.covidNewsService.pageHandler
    ])
    .pipe(
      switchMap(([country, page]) => this.covidNewsService.getCovidNews(country, page)),
      pluck('articles')
    );
  }
}