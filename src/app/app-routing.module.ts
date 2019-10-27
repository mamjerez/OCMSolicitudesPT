import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './auth/signin/signin.component';
import { InicioComponent } from '../app/components/inicio/inicio.component';
import { Page404Component } from './components/page404/page404.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PoliticaPrivacidadComponent } from './auth/politica-privacidad/politica-privacidad.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './auth/auth.guard';

import { UsersComponent } from './admin/users/users.component';



const appRoutes: Routes = [
  { path: 'signIn',  component: SigninComponent },
  { path: 'politica', canActivate: [AuthGuard], component: PoliticaPrivacidadComponent },
  { path: 'register', component: SignupComponent },
  { path: 'inicio', canActivate: [AuthGuard], component: InicioComponent },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },

  { path: 'users',  component: UsersComponent },

  { path: '**', pathMatch: 'full', component: Page404Component }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( appRoutes, { useHash: true } )
  ],
  exports: [
    RouterModule
]
})
export class AppRoutingModule { }
