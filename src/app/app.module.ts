import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {LocationStrategy, HashLocationStrategy,PathLocationStrategy} from '@angular/common';
import { HttpConfigInterceptor } from './interceptors/httpConfig.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS,HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import {AuthGuard} from './common/auth.guard';
import {AuthPostGuard} from './common/authPost.guard';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {LazyLoadScriptService} from './common/lazyLoadScript';
import {ServiceModule} from './services/service.module'
import { CKEditorModule } from 'ckeditor4-angular';
import {MatAngularModule} from './common/mat-angular.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SafePipe  } from './pipes/safe-url.pipe';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import {LandingModule} from './components/landing/landing.module';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SafePipe,
    NotFoundPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    ServiceModule,
    MatAngularModule,
    CKEditorModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    PerfectScrollbarModule,
    LandingModule
  ],
  providers: [
    
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true},
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },

    AuthGuard,
    AuthPostGuard,
    LazyLoadScriptService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
