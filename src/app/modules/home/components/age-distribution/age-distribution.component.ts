import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { Option, TotalAgeGroups } from '../../models/age-distribution.model';
import { AgeDistributionService } from '../../services/age-distribution/age-distribution.service';

@Component({
  selector: 'app-age-distribution',
  templateUrl: './age-distribution.component.html',
  styleUrls: ['./age-distribution.component.scss']
})
export class AgeDistributionComponent implements OnInit, OnDestroy {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = []
  public pieChartColors: any[] = [{ backgroundColor: ["#00D1B4", "#FFBF00", "#EC0067", "#333"] }];
  private totalAgeGroups = {} as TotalAgeGroups;
  private selectedOption: Option = 'cases';
  private destroy$ = new Subject();
  @Output() isAgeDistributionDataLoading = new EventEmitter();

  constructor(public ageDistributionService: AgeDistributionService) { }

  ngOnInit(): void {
    this.ageDistributionService.getAgeDistributionCases()
    .pipe(
      finalize(() => this.isAgeDistributionDataLoading.emit(false)),
      takeUntil(this.destroy$)
    )
    .subscribe(res => {
      const { cases } = res.total_age_groups;
      this.totalAgeGroups = res.total_age_groups;
      this.barChartLabels = Object.keys(cases);
      this.barChartData = [{ data: Object.values(cases) }]
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onOptionChange(event: any) {
    // This is to prevent the initial select that bulma does with the select element (it reselects the value that's been selected in the dropdown even if we only click the dropdown to open it)
    if(this.selectedOption === event.target.value) return;
    this.selectedOption = event.target.value;

    this.barChartLabels = Object.keys(this.totalAgeGroups[event.target.value as Option]);
    this.barChartData = [{ data: Object.values(this.totalAgeGroups[event.target.value as Option]) }]
  }
}