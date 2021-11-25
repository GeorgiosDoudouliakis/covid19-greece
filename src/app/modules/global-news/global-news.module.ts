import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { GlobalNewsComponent } from './pages/global-news/global-news.component';
import { CountrySelectorComponent } from './components/country-selector/country-selector.component';
import { NewsComponent } from './components/news/news.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: GlobalNewsComponent}]),SharedModule],
    exports: [RouterModule],
    declarations: [
        GlobalNewsComponent,
        CountrySelectorComponent,
        NewsComponent,
        PaginatorComponent
    ],
    providers: [],
})
export class GlobalNewsModule { }