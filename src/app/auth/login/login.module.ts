import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { routesLogin } from './login.routing';
// import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { MaterialModule } from '../../material/material.module';

const ENTITY_STATES = [...routesLogin ];

@NgModule({
  imports: [
    CommonModule,
    // SharedModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [LoginComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
