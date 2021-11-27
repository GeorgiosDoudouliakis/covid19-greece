import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CovidNewsService } from '@shared/services/covid-news/covid-news.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountrySelectorComponent implements OnInit, OnDestroy {
  countries: string[] = ['gr', 'ae', 'ar', 'at', 'au', 'be', 'bg', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];
  countryControl: FormControl = new FormControl(null);
  private destroy$ = new Subject();

  constructor(private covidNewsService: CovidNewsService) { }

  ngOnInit(): void {
    this.countryControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(country => this.covidNewsService.countryAction(country));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
