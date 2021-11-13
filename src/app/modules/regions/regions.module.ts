import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegionsComponent } from './pages/regions/regions.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: RegionsComponent}]),SharedModule],
    exports: [RouterModule],
    declarations: [RegionsComponent],
    providers: [],
})
export class RegionsModule { }
