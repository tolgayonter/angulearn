import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list/page-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: AppComponent }];

@NgModule({
  declarations: [AppComponent, SearchBarComponent, PageListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
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
  imports: [BrowserModule, AppSharedModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule {}
