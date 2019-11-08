import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { User } from '../../../shared/models/user.model';
import { UsersService } from '../../../../app/admin/users/users.service';
import { MyValidators } from '../../../libs/validators';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  user: User;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public usersService: UsersService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      // nombre: [{value: `${updateUserName}`, disabled: false}, [Validators.required, Validators.minLength(5)]],
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido1: ['', [Validators.required, Validators.minLength(3)]],
      apellido2: ['', [Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
      password: ['', [Validators.required, Validators.minLength(1)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(1)]],
    }, {
      validators: [MyValidators.isValidPassword]
    });

    // Hay que recibir el id como parametro
    this.usersService.getUser(5).subscribe((response => {
      this.form.controls.nombre.setValue(`${response[0].nombre}`);
      this.form.controls.apellido1.setValue(`${response[0].apellido1}`);
      this.form.controls.apellido2.setValue(`${response[0].apellido2}`);
      this.form.controls.email.setValue(`${response[0].email}`);
      this.form.controls.userName.setValue(`${response[0].userName}`);
    }));
  }

  // #region  Nombres de campos para usar en HTML.
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

  get userNameField() {
    return this.form.get('userName');
  }

  get passwordField() {
    return this.form.get('password');
  }

  get confirmPasswordField() {
    return this.form.get('confirmPassword');
  }
  //#endregion


  signUp() {
    this.user = new User();
    let errorText: string;
    if (this.form.valid) {
      this.user.nombre = this.form.value.nombre;
      this.user.apellido1 = this.form.value.apellido1;
      this.user.apellido2 = this.form.value.apellido2;
      this.user.email = this.form.value.email;
      this.user.userName = this.form.value.userName;
      this.user.password = this.form.value.password;
      // this.user.idUserCreate = 1;
      // this.user.idUserUpdate = 1;
    }

    this.usersService.signUp(this.user).subscribe((response => {
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
        console.log(JSON.stringify(response));
        errorText = 'Error en la conexión.';
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
