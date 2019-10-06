import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { InicioComponent } from '../app/components/inicio/inicio.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
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
