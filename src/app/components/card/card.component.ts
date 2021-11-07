import { Component, Input, OnInit } from '@angular/core';
import { OverallStats } from 'src/app/models/overall-stats.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() stats = {} as OverallStats;

  constructor() { }

  ngOnInit(): void {}
}