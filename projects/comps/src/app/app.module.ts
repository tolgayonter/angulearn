import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, AppSharedRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [CommonModule, AppSharedRoutingModule],
  providers: [],
})
export class AppSharedModule {
  static forRoot(): ModuleWithProviders<AppSharedModule> {
    return {
      ngModule: AppSharedModule,
      providers: [],
    };
  }
}

@NgModule({
  imports: [BrowserModule, AppRoutingModule, AppSharedModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule {}
