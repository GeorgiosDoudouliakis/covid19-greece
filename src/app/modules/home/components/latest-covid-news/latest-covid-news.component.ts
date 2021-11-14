import { Component, OnInit } from '@angular/core';
import { Article, News } from '@shared/models/news.model';
import { LatestCovidNewsService } from '@shared/services/latest-covid-news/latest-covid-news.service';

@Component({
  selector: 'app-latest-covid-news',
  templateUrl: './latest-covid-news.component.html',
  styleUrls: ['./latest-covid-news.component.scss']
})
export class LatestCovidNewsComponent implements OnInit {
  articles: Article[] = [];
  isLoading = true;

  constructor(private latestCovidNewsService: LatestCovidNewsService) { }

  ngOnInit(): void {
    this.latestCovidNewsService.getCovidNews().subscribe((res: News) => {
      console.log(res);
      this.isLoading = false;
      this.articles = res.articles;
    })
  }
}