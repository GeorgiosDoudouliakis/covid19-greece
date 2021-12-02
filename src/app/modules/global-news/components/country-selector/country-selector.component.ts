import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountrySelectorComponent implements OnInit, OnDestroy {
  @Input() numberOfArticles: number;
  @Input() countries: Country[];
  countryControl: FormControl = new FormControl('gr');
  private destroy$ = new Subject();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.countryControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(country => { 
        this.router.navigate(['./'], {
          relativeTo: this.route,
          queryParams: { country }
        })
      });

    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe(params => {
      if(this.countries.filter(country => country.code === params.country).length === 0) {
        this.countryControl.patchValue('gr');
        return;
      }
      this.countryControl.patchValue(params.country);
    })  
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
