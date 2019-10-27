import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../app/material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


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
import { UsersComponent } from './admin/users/users.component';
import { UserUpdateComponent } from './admin/users/user-update/user-update.component';

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
    UsersComponent,
    UserUpdateComponent,
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
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
