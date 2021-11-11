import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from '@shared/components/navigation/navigation.component';

const routes: Routes = [
  { 
    path: '', component: NavigationComponent, children: [
      { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), pathMatch: 'full' }
    ]
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }