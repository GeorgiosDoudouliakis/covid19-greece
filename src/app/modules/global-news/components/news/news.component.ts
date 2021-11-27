import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Article } from '@shared/models/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsComponent implements OnInit {
  @Input() articles: Article[];

  constructor() { }

  ngOnInit(): void {}
}