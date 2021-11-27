import { Component, OnInit } from '@angular/core';
import { Article } from '@shared/models/news.model';
import { CovidNewsService } from '@shared/services/covid-news/covid-news.service';
import { combineLatest, Subscription } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-global-news',
  templateUrl: './global-news.component.html',
  styleUrls: ['./global-news.component.scss']
})
export class GlobalNewsComponent implements OnInit {
  articles: Article[] = [];
  articlesSubscription$: Subscription;

  constructor(private covidNewsService: CovidNewsService) { }

  ngOnInit(): void {
    this.articlesSubscription$ = combineLatest([
      this.covidNewsService.countryHandler,
    ])
    .pipe(
      switchMap(([country]) => this.covidNewsService.getCovidNews(country)),
      pluck('articles')
    )
    .subscribe(articles => this.articles = articles);
  }

  ngOnDestroy() {
    this.articlesSubscription$?.unsubscribe();
  }
}
