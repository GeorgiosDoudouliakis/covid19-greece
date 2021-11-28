import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { GenderService } from '../../services/gender/gender.service';
import { ChartOptions, ChartType } from 'chart.js';
import { monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';
import { GenderPercentages } from '../../models/gender-percentages.model';
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit, OnDestroy {
  public pieChartOptions: ChartOptions = {
    responsive: true,
    tooltips: { enabled: false }
  };  
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartColors: any[] = [{ backgroundColor: ["#EC0067", "#333"] }];
  public pieChartPlugins = [];
  public femalesPercentage: number;
  public malesPercentage: number;
  private destroy$ = new Subject();
  @Output() isGenderDataLoading = new EventEmitter();

  constructor(private genderService: GenderService) { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.genderService.getGenderCases()
    .pipe(
      finalize(() => this.isGenderDataLoading.emit(false)),
      takeUntil(this.destroy$)
    )
    .subscribe((res: GenderPercentages) => {
      const { total_females_percentage, total_males_percentage } = res;
      this.femalesPercentage = total_females_percentage;
      this.malesPercentage = total_males_percentage;
      this.pieChartData = [total_females_percentage, total_males_percentage];
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}