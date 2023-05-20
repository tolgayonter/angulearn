import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'passwords',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'passwords',
        exposedModule: './Module',
      }).then((m) => m.AppSharedModule),
  },
  {
    path: 'cards',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'cards',
        exposedModule: './Module',
      }).then((m) => m.AppSharedModule),
  },
  {
    path: 'pipes',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'pipes',
        exposedModule: './Module',
      }).then((m) => m.AppSharedModule),
  },
  {
    path: 'pages',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'pages',
        exposedModule: './Module',
      }).then((m) => m.AppSharedModule),
  },
  // {
  //   path: 'comps',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'manifest',
  //       remoteName: 'comps',
  //       exposedModule: './Module',
  //     }).then((m) => m.AppSharedModule),
  // },
  {
    path: 'searches',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'searches',
        exposedModule: './Module',
      }).then((m) => m.AppSharedModule),
  },
  {
    path: 'photos',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'photos',
        exposedModule: './Module',
      }).then((m) => m.AppSharedModule),
  },
  {
    path: 'credits',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'credits',
        exposedModule: './Module',
      }).then((m) => m.AppSharedModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
