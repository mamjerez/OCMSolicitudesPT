import { Component, OnInit } from '@angular/core';
// import { IUser } from 'src/app/shared/models/user.model';
// import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { User } from './../../shared/models/user.model';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;

  idUser: number ;
  nombre: string;
  apellido1: string;
  apellido2: string;
  email: string;
  user_name: string;
  password: string;
  // avatar_url: string ;
  // observaciones: string ;
  // time_create: Date;
  // time_update: Date ;
  // idUser_create: number;
  // idUser_update: number;

  constructor(
    public signupService: SignupService,
    private router: Router) {
   }

  ngOnInit() {
  }

  signUp() {
    this.user = new User(
    this.idUser,
    this.nombre,
    this.apellido1,
    this.apellido2,
    this.email,
    this.user_name,
    this.password,
    // this.avatar_url,
    // this.observaciones,
    // this.time_create,
    // this.time_update,
    // this.idUser_create,
    // this.idUser_update
    );

    this.signupService.signUp(this.user).subscribe(response => {
      if (response === 'user creado') {
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: '¡Te has registrado correctamente!',
          showConfirmButton: true,
          timer: 3000
        })
        console.log(this.user);
        this.router.navigate(['/inicio']);
      }
      if (response === 'Error al crear user') {
        Swal.fire({
          title: '¡Error!',
          text: 'Error al crear usuario.',
          type: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    });
  }
}
