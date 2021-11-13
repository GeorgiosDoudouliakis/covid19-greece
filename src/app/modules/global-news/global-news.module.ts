import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { GlobalNewsComponent } from './pages/global-news/global-news.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: GlobalNewsComponent}]),SharedModule],
    exports: [RouterModule],
    declarations: [
        GlobalNewsComponent
    ],
    providers: [],
})
export class GlobalNewsModule { }