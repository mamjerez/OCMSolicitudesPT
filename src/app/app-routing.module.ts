import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { InicioComponent } from '../app/components/inicio/inicio.component';
import { SignupComponent } from '../app/auth/signup/signup.component';

const appRoutes: Routes = [
  { path: 'signIn', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  // { path: 'register', component: RegisterComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'signIn' }
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
