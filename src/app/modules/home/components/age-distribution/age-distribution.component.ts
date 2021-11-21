import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { finalize } from 'rxjs/operators';
import { AgeDistribution } from '../../models/age-distribution.model';
import { AgeDistributionService } from '../../services/age-distribution/age-distribution.service';

@Component({
  selector: 'app-age-distribution',
  templateUrl: './age-distribution.component.html',
  styleUrls: ['./age-distribution.component.scss']
})
export class AgeDistributionComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = []
  public pieChartColors: any[] = [{ backgroundColor: ["#00D1B4", "#FFBF00", "#EC0067", "#333"] }];
  @Output() isAgeDistributionDataLoading = new EventEmitter();

  constructor(private ageDistributionService: AgeDistributionService) { }

  ngOnInit(): void {
    this.ageDistributionService.getAgeDistributionCases()
    .pipe(finalize(() => this.isAgeDistributionDataLoading.emit(false)))
    .subscribe((res: AgeDistribution) => {
      const { cases } = res.total_age_groups;
      this.barChartLabels = Object.keys(cases);
      this.barChartData = [{ data: Object.values(cases) }]
    })
  }
}