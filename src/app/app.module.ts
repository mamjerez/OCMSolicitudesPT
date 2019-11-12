import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../app/material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgGridModule } from 'ag-grid-angular';


import { SigninComponent } from './auth/signin/signin.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Page404Component } from './components/page404/page404.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PoliticaPrivacidadComponent } from './auth/politica-privacidad/politica-privacidad.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { Ng2Webstorage } from 'ngx-webstorage';
import { ProfileComponent } from './components/profile/profile.component';
import { UserUpdateComponent } from './admin/users/user-update/user-update.component';
import { UserAgGridComponent } from './admin/users/user-ag-grid/user-ag-grid.component';
import { UserBootstrapComponent } from './admin/users/user-bootstrap/user-bootstrap.component';
import { UserMaterialComponent } from './admin/users/user-material/user-material.component';

import { User } from './shared/models/user.model';
import { UserFormAddUpdateComponent } from './shared/components/user-form-add-update/user-form-add-update.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SigninComponent,
    InicioComponent,
    Page404Component,
    SignupComponent,
    PoliticaPrivacidadComponent,
    ProfileComponent,
    UserUpdateComponent,
    UserAgGridComponent,
    UserBootstrapComponent,
    UserMaterialComponent,
    UserFormAddUpdateComponent,
    // FontAwesomeModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    Ng2Webstorage.forRoot({ prefix: 'app', separator: '-' }),
    AgGridModule.withComponents([])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
