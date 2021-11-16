import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegionsComponent } from './pages/regions/regions.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: RegionsComponent}]),SharedModule],
    exports: [RouterModule],
    declarations: [RegionsComponent, MapComponent],
    providers: [],
})
export class RegionsModule { }
