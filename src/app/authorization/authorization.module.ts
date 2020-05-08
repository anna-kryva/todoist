import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from "../shared/modules/material.module";
import { SharedModule } from '../shared/modules/shared.module';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';


@NgModule({
  declarations: [
    LoginPageComponent, 
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
          path: '', component: AuthLayoutComponent , children: [
              { path: '', redirectTo: '/authorization', pathMatch: 'full' },
              { path: '', component: LoginPageComponent }
          ]
      }
  ])],
  exports: [RouterModule]
})
export class AuthorizationModule {}
