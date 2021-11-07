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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OverallStatsComponent,
    CardComponent,
    StatsComponent,
    GenderComponent
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