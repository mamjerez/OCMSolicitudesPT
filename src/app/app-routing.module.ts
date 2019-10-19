import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { InicioComponent } from '../app/components/inicio/inicio.component';
import { Page404Component } from './components/page404/page404.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PoliticaPrivacidadComponent } from './auth/politica-privacidad/politica-privacidad.component';

const appRoutes: Routes = [
  { path: 'signIn', component: LoginComponent },
  { path: 'politica', component: PoliticaPrivacidadComponent },
  { path: 'register', component: SignupComponent },
  { path: 'inicio', component: InicioComponent },
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
