import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardFormComponent } from './card-form/card-form.component';
import { InputComponent } from './input/input.component';
import { CardComponent } from './card/card.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: AppComponent }];

@NgModule({
  declarations: [
    AppComponent,
    CardFormComponent,
    InputComponent,
    CardComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
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
