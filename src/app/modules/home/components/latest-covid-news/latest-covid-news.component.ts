import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Article, News } from '@shared/models/news.model';
import { LatestCovidNewsService } from '@shared/services/latest-covid-news/latest-covid-news.service';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-latest-covid-news',
  templateUrl: './latest-covid-news.component.html',
  styleUrls: ['./latest-covid-news.component.scss']
})
export class LatestCovidNewsComponent implements OnInit, OnDestroy {
  articles: Article[] = [];
  private destroy$ = new Subject();
  @Output() isLatestNewsDataLoading = new EventEmitter();

  constructor(private latestCovidNewsService: LatestCovidNewsService) { }

  ngOnInit(): void {
    this.latestCovidNewsService.getCovidNews()
    .pipe(
      finalize(() => this.isLatestNewsDataLoading.emit(false)),
      takeUntil(this.destroy$)
    )
    .subscribe((res: News) => {
      this.articles = res.articles;
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}