import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingModule} from './landing/landing.module';
import {RegisterModule} from './register/register.module';
import {EagerLoaderService, eagerLoaderServiceFactory} from "./register/eager-loader.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LandingModule,
    RegisterModule,
    RouterModule
  ],
  providers: [
    EagerLoaderService,
    {provide: APP_INITIALIZER, useFactory: eagerLoaderServiceFactory, deps: [EagerLoaderService], multi: true,}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
