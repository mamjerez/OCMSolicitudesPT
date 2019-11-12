import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

import { User } from '../../../shared/models/user.model';
import { UsersService } from '../../../../app/admin/users/users.service';
import { MyValidators } from '../../../libs/validators';


@Component({
  selector: 'app-user-form-add-update',
  templateUrl: './user-form-add-update.component.html',
  styleUrls: ['./user-form-add-update.component.css']
})
export class UserFormAddUpdateComponent implements OnInit {
  user: User;
  form: FormGroup;
  @ViewChild('email', {static: false}) email: ElementRef;
  isUpdate = true;

  constructor(
    private formBuilder: FormBuilder,
    public usersService: UsersService,
    private router: Router,
    private activateRoute: ActivatedRoute
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

    // Recibe el id como parametro. + lo convierte a number.
    const id = +this.activateRoute.snapshot.paramMap.get('id');
    this.usersService.getUser(id).subscribe((response => {
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

  update() {
    this.user = new User();
    if (this.form.valid) {
      this.user.idUser = +this.activateRoute.snapshot.paramMap.get('id');
      this.user.nombre = this.form.value.nombre;
      this.user.apellido1 = this.form.value.apellido1;
      this.user.apellido2 = this.form.value.apellido2;
      this.user.email = this.form.value.email;
      this.user.userName = this.form.value.userName;
      this.user.password = this.form.value.password;
      // this.user.idUserCreate = 1;
      // this.user.idUserUpdate = 1;
    }
    this.usersService.update(this.user).subscribe((response => {
      if (JSON.stringify(response).includes('updated')) {
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: '¡Usuario actualizado correctamente!',
          showConfirmButton: false,
          timer: 3000
        });
        this.router.navigate(['/usersAgGrid']);
      } else {
        Swal.fire({
          title: '¡Error!',
          text: `Problema al actualizar el usuario.`,
          type: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    }));
  }

  validateEmail() {
    this.usersService.findEmail(this.form.value.email, +this.activateRoute.snapshot.paramMap.get('id')).subscribe(response => {
      if (response[0]) {
        Swal.fire({
          title: '¡Error!',
          text: `El email ${this.form.value.email} ya existe.`,
          type: 'error',
          confirmButtonText: 'Aceptar'
        });
        console.log(this.email.nativeElement);
        this.email.nativeElement.focus();
      }
    });
  }

  validateUserName() {
    this.usersService.findUserName(this.form.value.userName, +this.activateRoute.snapshot.paramMap.get('id')).subscribe(response => {
      console.log(response[0]);
      if (response[0]) {
        Swal.fire({
          title: '¡Error!',
          text: `El nombre de usuario ${this.form.value.userName} ya existe.`,
          type: 'error',
          confirmButtonText: 'Aceptar'
        });
        console.log(this.email.nativeElement);
        this.email.nativeElement.focus();
        setTimeout(() => this.email.nativeElement.focus(), 0);
      }
    });
  }
}
