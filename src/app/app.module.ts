import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { NgxCaptureModule } from 'ngx-capture';
import { CacheInterceptor } from './interceptors/cache.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgxCaptureModule
  ],
  providers: [{ 
    provide: HTTP_INTERCEPTORS, 
    useClass: CacheInterceptor, 
    multi: true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }