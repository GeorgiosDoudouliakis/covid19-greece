import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { AgeDistributionComponent } from './components/age-distribution/age-distribution.component';
import { CardComponent } from './components/overall-stats/card/card.component';
import { LatestCovidNewsComponent } from './components/latest-covid-news/latest-covid-news.component';
import { OverallStatsComponent } from './components/overall-stats/overall-stats.component';
import { AgeDistributionService } from './services/age-distribution/age-distribution.service';
import { OverallStatsService } from './services/overall-stats/overall-stats.service';
import { HomeComponent } from './pages/home/home.component';
import { ReplaceCommasWithDotsPipe } from './pipes/replace-commas-with-dots.pipe';
import { GoToNewsSectionComponent } from './components/go-to-news-section/go-to-news-section.component';
import { GoToNewsDirective } from './directives/go-to-news.directive';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: HomeComponent}]), ChartsModule, SharedModule],
    exports: [RouterModule],
    declarations: [
        AgeDistributionComponent, 
        CardComponent, 
        LatestCovidNewsComponent,
        OverallStatsComponent,
        HomeComponent,
        ReplaceCommasWithDotsPipe,
        GoToNewsSectionComponent,
        GoToNewsDirective
    ],
    providers: [OverallStatsService, AgeDistributionService],
})
export class HomeModule { }