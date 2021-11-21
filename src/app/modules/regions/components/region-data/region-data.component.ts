import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Region } from '../../models/region.model';

@Component({
  selector: 'app-region-data',
  templateUrl: './region-data.component.html',
  styleUrls: ['./region-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionDataComponent implements OnInit {
  @Input() regionData = {} as Region;
  @Output() regionDataHandler = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}
}
