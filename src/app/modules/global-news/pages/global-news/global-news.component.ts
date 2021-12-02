import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '@shared/models/news.model';
import { CovidNewsService } from '@shared/services/covid-news/covid-news.service';
import { Subscription } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';
import { Country } from '../../models/country.model';
import { COUNTRIES } from '../../mock/countries.mock';

@Component({
  selector: 'app-global-news',
  templateUrl: './global-news.component.html',
  styleUrls: ['./global-news.component.scss']
})
export class GlobalNewsComponent implements OnInit {
  countries: Country[];
  articles: Article[] = [];
  numberOfArticles: number;
  paramsSubscription$: Subscription;
  isGlobalNewsDataLoading = true;

  constructor(private covidNewsService: CovidNewsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.countries = COUNTRIES;

    this.paramsSubscription$ = this.route.queryParams
      .pipe(
        switchMap((params) => {
          if(this.countries.filter(country => country.code === params.country).length === 0) {
            return this.covidNewsService.getCovidNews('gr');
          }
          return this.covidNewsService.getCovidNews(params.country);
        }),
        pluck('articles')
      )
      .subscribe(
        articles => {
          this.articles = articles;
          this.numberOfArticles = articles.length;
          this.isGlobalNewsDataLoading = false;
        },
        (err) => this.isGlobalNewsDataLoading = false
      );
  }
  
  ngOnDestroy() {
    this.paramsSubscription$?.unsubscribe();
  }
}
