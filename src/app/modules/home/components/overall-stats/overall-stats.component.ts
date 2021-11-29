import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { OverallStatsService } from '../../services/overall-stats/overall-stats.service';
import { OverallStats } from '../../models/overall-stats.model';
import { forkJoin, Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-overall-stats',
  templateUrl: './overall-stats.component.html',
  styleUrls: ['./overall-stats.component.scss']
})
export class OverallStatsComponent implements OnInit, OnDestroy {
  overallStats: OverallStats[] = [];
  private destroy$ = new Subject();
  @Output() isOverallStatsDataLoading = new EventEmitter();

  constructor(private overallStatsService: OverallStatsService) { }

  ngOnInit(): void {
      forkJoin([
        this.overallStatsService.getConfirmedCases(),
        this.overallStatsService.getRecoveredCases(),
        this.overallStatsService.getDeathCases(),
        this.overallStatsService.getActiveCases(), 
        this.overallStatsService.getIntensiveCareCases(), 
        this.overallStatsService.getTotalTests(),
        this.overallStatsService.getGenderCases()
      ])
      .pipe(
        finalize(() => this.isOverallStatsDataLoading.emit(false)),
        takeUntil(this.destroy$)
      )
      .subscribe((res: any) => { // TODO: ADD TYPE
        const confirmed = {
          title: 'Επιβεβαιωμένα',
          cases: res[0].cases[res[0].cases.length - 1].confirmed
        };

        const recovered = {
          title: 'Αναρρώσεις',
          cases: res[1].cases[res[1].cases.length - 1].recovered
        };

        const deaths = {
          title: 'Θάνατοι',
          cases: res[2].cases[res[2].cases.length - 1].deaths
        };

        const active = {
          title: 'Ενεργά',
          cases: res[3].cases[res[3].cases.length - 1].active
        };

        const intensiveCare = {
          title: 'Εντατικής Θεραπείας',
          cases: res[4].cases[res[4].cases.length - 1].intensive_care
        };

        const rapidTests = {
          title: 'Rapid Tests',
          cases: res[5].total_tests[res[5].total_tests.length - 1]['rapid-tests']
        };
        
        const tests = {
          title: 'Tests',
          cases: res[5].total_tests[res[5].total_tests.length - 1].tests
        };

        const females = {
          title: 'Γυναίκες',
          cases: res[6].total_females_percentage
        }

        const males = {
          title: 'Άνδρες',
          cases: res[6].total_males_percentage
        }

        this.overallStats = [confirmed,recovered,deaths,active,intensiveCare,rapidTests,tests, females, males];
      })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}