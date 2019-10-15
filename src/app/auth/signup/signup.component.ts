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
    public signupService: SignupService,
    private router: Router) {
   }

  ngOnInit() {
    this.user = new User();
    console.log(this.user);
    }

  signUp() {
    let errorText: string;
    console.log(this.user);
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
        console.log(response);
        switch (response) {
          case 1062:
            errorText = 'El usuario ya existe.';
            break;
          default:
             errorText = 'Error al crear usuario.';
             break;
        }
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
