import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@shared/models/news.model';
import { CovidNewsService } from '@shared/services/covid-news/covid-news.service';
import { Subscription } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-global-news',
  templateUrl: './global-news.component.html',
  styleUrls: ['./global-news.component.scss']
})
export class GlobalNewsComponent implements OnInit {
  articles: Article[] = [];
  paramsSubscription$: Subscription;

  constructor(private covidNewsService: CovidNewsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramsSubscription$ = this.route.queryParams
      .pipe(
        switchMap((params) => this.covidNewsService.getCovidNews(params.country)),
        pluck('articles')
      )
      .subscribe(articles => this.articles = articles);
  }
  
  ngOnDestroy() {
    this.paramsSubscription$?.unsubscribe();
  }
}
