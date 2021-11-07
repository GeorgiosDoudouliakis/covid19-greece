import { Component, OnInit } from '@angular/core';
import { GenderService } from 'src/app/services/gender/gender.service';
import { ChartOptions, ChartType } from 'chart.js';
import { monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Label, SingleDataSet } from 'ng2-charts';
import { GenderPercentages } from 'src/app/models/gender-percentages.model';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };  
  public pieChartLabels: Label[] = ['Females', 'Males'];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors: any[] = [{ backgroundColor: ["#FFBF00", "#EC0067"] }];
  public pieChartPlugins = [];

  constructor(private genderService: GenderService) { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.genderService.getGenderCases().subscribe((res: GenderPercentages) => {
      const { total_females_percentage, total_males_percentage } = res;
      this.pieChartData = [total_females_percentage, total_males_percentage];
    });
  }
}