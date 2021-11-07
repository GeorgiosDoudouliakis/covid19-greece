import { Component, OnInit } from '@angular/core';
import { OverallStatsService } from 'src/app/services/overall-stats/overall-stats.service';
import { OverallStats } from 'src/app/models/overall-stats.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-overall-stats',
  templateUrl: './overall-stats.component.html',
  styleUrls: ['./overall-stats.component.scss']
})
export class OverallStatsComponent implements OnInit {
  confirmed = {} as OverallStats;
  recovered = {} as OverallStats;
  deaths = {} as OverallStats;
  active = {} as OverallStats;
  intensiveCare = {} as OverallStats;
  rapidTests = {} as OverallStats;
  tests = {} as OverallStats;
  isLoading = true;

  constructor(private overallStatsService: OverallStatsService) { }

  ngOnInit(): void {
      forkJoin([
        this.overallStatsService.getConfirmedCases(),
        this.overallStatsService.getRecoveredCases(),
        this.overallStatsService.getDeathCases(),
        this.overallStatsService.getActiveCases(), 
        this.overallStatsService.getIntensiveCareCases(), 
        this.overallStatsService.getTotalTests()
      ]).subscribe((res: any) => {
        this.isLoading = false;

        this.confirmed = {
          title: 'Confirmed',
          cases: res[0].cases[res[0].cases.length - 1].confirmed
        };

        this.recovered = {
          title: 'Recovered',
          cases: res[1].cases[res[1].cases.length - 1].recovered
        };

        this.deaths = {
          title: 'Deaths',
          cases: res[2].cases[res[2].cases.length - 1].deaths
        };

        this.active = {
          title: 'Active',
          cases: res[3].cases[res[3].cases.length - 1].active
        };

        this.intensiveCare = {
          title: 'Intensive Care',
          cases: res[4].cases[res[4].cases.length - 1].intensive_care
        };
        console.log(res[5]);
        this.rapidTests = {
          title: 'Rapid Tests',
          cases: res[5].total_tests[res[5].total_tests.length - 1]['rapid-tests']
        };

        this.tests = {
          title: 'Tests',
          cases: res[5].total_tests[res[5].total_tests.length - 1].tests
        };
      })
  }
}