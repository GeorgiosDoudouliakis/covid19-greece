import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { COUNTRIES } from '../../mock/countries.mock';

interface Country {
  name: string;
  code: string;
}

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountrySelectorComponent implements OnInit, OnDestroy {
  countries: Country[];
  countryControl: FormControl = new FormControl('gr');
  private destroy$ = new Subject();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.countries = COUNTRIES;
    
    this.countryControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(country => { 
        this.router.navigate(['./'], {
          relativeTo: this.route,
          queryParams: { country }
        })
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
