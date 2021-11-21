import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Article, News } from '@shared/models/news.model';
import { LatestCovidNewsService } from '@shared/services/latest-covid-news/latest-covid-news.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-latest-covid-news',
  templateUrl: './latest-covid-news.component.html',
  styleUrls: ['./latest-covid-news.component.scss']
})
export class LatestCovidNewsComponent implements OnInit {
  articles: Article[] = [];
  @Output() isLatestNewsDataLoading = new EventEmitter();

  constructor(private latestCovidNewsService: LatestCovidNewsService) { }

  ngOnInit(): void {
    this.latestCovidNewsService.getCovidNews()
    .pipe(finalize(() => this.isLatestNewsDataLoading.emit(false)))
    .subscribe((res: News) => {
      this.articles = res.articles;
    })
  }
}