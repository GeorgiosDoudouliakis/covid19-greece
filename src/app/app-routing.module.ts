import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from '@shared/components/navigation/navigation.component';

const routes: Routes = [
  { 
    path: '', component: NavigationComponent, children: [
      { path: '', 
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), 
        pathMatch: 'full' 
      },
      { path: 'global-news', 
        loadChildren: () => import('./modules/global-news/global-news.module').then(m => m.GlobalNewsModule) 
      },
      { path: 'regions', 
        loadChildren: () => import('./modules/regions/regions.module').then(m => m.RegionsModule) 
      }
    ],
  },
  { path: '**',  redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }