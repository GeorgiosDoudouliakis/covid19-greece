import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ArticleComponent } from './components/article/article.component';
import { ArrowVisibilityDirective } from './directives/arrow-visibility/arrow-visibility.directive';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [
        CommonModule, 
        NavigationComponent, 
        LoaderComponent, 
        ArticleComponent, 
        ArrowVisibilityDirective
    ],
    declarations: [
        HeaderComponent, 
        FooterComponent, 
        NavigationComponent, 
        LoaderComponent, 
        ArticleComponent, 
        ArrowVisibilityDirective
    ],
    providers: [],
})
export class SharedModule { }