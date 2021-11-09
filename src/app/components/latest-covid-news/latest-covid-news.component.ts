import { Component, OnInit } from '@angular/core';
import { Article, News } from 'src/app/models/news.model';
import { LatestCovidNewsService } from 'src/app/services/latest-covid-news/latest-covid-news.service';

@Component({
  selector: 'app-latest-covid-news',
  templateUrl: './latest-covid-news.component.html',
  styleUrls: ['./latest-covid-news.component.scss']
})
export class LatestCovidNewsComponent implements OnInit {
  articles: Article[] = [];

  constructor(private latestCovidNewsService: LatestCovidNewsService) { }

  ngOnInit(): void {
    this.latestCovidNewsService.getCovidNews().subscribe((res: News) => {
      this.articles = res.data;
      console.log(res.data);
    })
  }
}