import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';

import { AuthGuard } from './authorization/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomePageComponent, canActivate: [AuthGuard] }
    ],
  },
  {
    path: 'authorization',
    loadChildren: () =>
      import('./authorization/authorization.module').then(
        (m) => m.AuthorizationModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
