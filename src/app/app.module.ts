import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OverallStatsComponent } from './components/overall-stats/overall-stats.component';
import { CardComponent } from './components/card/card.component';
import { StatsComponent } from './components/stats/stats.component';
import { ChartsModule } from 'ng2-charts';
import { GenderComponent } from './components/gender/gender.component';
import { AgeDistributionComponent } from './components/age-distribution/age-distribution.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LatestCovidNewsComponent } from './components/latest-covid-news/latest-covid-news.component';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OverallStatsComponent,
    CardComponent,
    StatsComponent,
    GenderComponent,
    AgeDistributionComponent,
    LoaderComponent,
    LatestCovidNewsComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }