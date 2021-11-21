import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxCaptureModule } from 'ngx-capture';
import { RegionsComponent } from './pages/regions/regions.component';
import { MapComponent } from './components/map/map.component';
import { RegionDataComponent } from './components/region-data/region-data.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: RegionsComponent}]), 
        SharedModule, 
        NgxCaptureModule
    ],
    exports: [RouterModule],
    declarations: [RegionsComponent, MapComponent, RegionDataComponent],
    providers: [],
})
export class RegionsModule { }
