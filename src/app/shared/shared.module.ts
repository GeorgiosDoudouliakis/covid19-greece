import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [CommonModule, NavigationComponent, LoaderComponent],
    declarations: [HeaderComponent, FooterComponent, NavigationComponent, LoaderComponent, LanguageSelectorComponent],
    providers: [],
})
export class SharedModule { }