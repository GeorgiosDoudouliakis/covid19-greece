import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { AgeDistributionComponent } from './components/age-distribution/age-distribution.component';
import { ArticleComponent } from './components/article/article.component';
import { CardComponent } from './components/card/card.component';
import { GenderComponent } from './components/gender/gender.component';
import { LatestCovidNewsComponent } from './components/latest-covid-news/latest-covid-news.component';
import { OverallStatsComponent } from './components/overall-stats/overall-stats.component';
import { AgeDistributionService } from './services/age-distribution/age-distribution.service';
import { GenderService } from './services/gender/gender.service';
import { OverallStatsService } from './services/overall-stats/overall-stats.service';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: HomeComponent}]), ChartsModule, SharedModule],
    exports: [RouterModule],
    declarations: [
        AgeDistributionComponent, 
        ArticleComponent, 
        CardComponent, 
        GenderComponent,
        LatestCovidNewsComponent,
        OverallStatsComponent,
        HomeComponent
    ],
    providers: [OverallStatsService, AgeDistributionService, GenderService],
})
export class HomeModule { }