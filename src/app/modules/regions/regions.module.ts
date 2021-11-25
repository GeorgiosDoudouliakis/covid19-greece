import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxCaptureModule } from 'ngx-capture';
import { RegionsComponent } from './pages/regions/regions.component';
import { MapComponent } from './components/map/map.component';
import { RegionDataComponent } from './components/region-data/region-data.component';
import { ReplaceDotsAndCommasPipe } from './pipes/replace-dots-and-commas.pipe';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: RegionsComponent}]), 
        SharedModule, 
        NgxCaptureModule
    ],
    exports: [RouterModule],
    declarations: [
        RegionsComponent, 
        MapComponent, 
        RegionDataComponent, 
        ReplaceDotsAndCommasPipe
    ],
    providers: [],
})
export class RegionsModule { }
