import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { User } from './../../shared/models/user.model';
import { SignupService } from '../signup/signup.service';
// import { IUser } from 'src/app/shared/models/user.model';
import { MyValidators } from '../../libs/validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  user: User;
  form: FormGroup;

// Usando  [(ngModel)]= "user.nombre" en lugar de  [(ngModel)]= "nombre"
// evito tener que definir las variable aqui.
  // idUser: number ;
  // nombre: string;
  // apellido1: string;
  // apellido2: string;
  // email: string;
  // user_name: string;
  // password: string;
  // // avatar_url: string ;
  // // observaciones: string ;
  // // time_create: Date;
  // // time_update: Date ;
  // // idUser_create: number;
  // // idUser_update: number;

  constructor(
    private formBuilder: FormBuilder,
    public signupService: SignupService,
    private matSnackBar: MatSnackBar,
    private router: Router
    ) {
      this.buildForm();
   }

  ngOnInit() {
    this.user = new User();
    // console.log(this.user);
    }

       private buildForm() {
      this.form = this.formBuilder.group({
        nombre: ['', [ Validators.required, Validators.minLength(5)]],
        apellido1: ['', [ Validators.required, Validators.minLength(3)]],
        apellido2: ['', [ Validators.minLength(3)]],
        email: ['', [ Validators.required, Validators.email]],
        nombreUser: ['', [ Validators.required, Validators.minLength(3),  Validators.maxLength(12)]],
        password: ['', [ Validators.required, Validators.minLength(1)]],
        confirmPassword: ['', [ Validators.required, Validators.minLength(1)]],
      }, {
        validators: [ MyValidators.isValidPassword ]
      });
    }

    get nombreField() {
      return this.form.get('nombre');
    }

    get apellido1Field() {
      return this.form.get('apellido1');
    }

    get apellido2Field() {
      return this.form.get('apellido2');
    }
    get emailField() {
      return this.form.get('email');
    }

    get nombreUserField() {
      return this.form.get('nombreUser');
    }

    get passwordField() {
      return this.form.get('password');
    }

    get confirmPasswordField() {
      return this.form.get('confirmPassword');
    }

    private openMessage(message: string) {
      this.matSnackBar.open(message, 'Cerrar');
    }

  signUp() {
    let errorText: string;

    if (this.form.valid) {
      this.user.nombre = this.form.value.nombre;
      this.user.apellido1 = this.form.value.apellido1;
      this.user.apellido2 = this.form.value.apellido2;
      this.user.email = this.form.value.email;
      this.user.user_name = this.form.value.nombreUser;
      this.user.password = this.form.value.password;
     }

    // console.log(this.user);
    this.signupService.signUp(this.user).subscribe((response => {
      if (response === 'user creado') {
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: '¡Te has registrado correctamente!',
          showConfirmButton: false,
          timer: 3000
        });
        this.router.navigate(['/inicio']);
      } else {
        // console.log(response);
        errorText = JSON.stringify(response);
        // console.log(errorText);
        Swal.fire({
          title: '¡Error!',
          text: errorText,
          type: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    }));
  }
}
