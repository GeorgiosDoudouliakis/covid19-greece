import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared/shared.module';
import { GlobalNewsComponent } from './pages/global-news/global-news.component';
import { CountrySelectorComponent } from './components/country-selector/country-selector.component';
import { NewsComponent } from './components/news/news.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: GlobalNewsComponent}]),
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    exports: [RouterModule],
    declarations: [
        GlobalNewsComponent,
        CountrySelectorComponent,
        NewsComponent
    ],
    providers: [],
})
export class GlobalNewsModule { }