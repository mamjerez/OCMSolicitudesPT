import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { LoginService } from './login.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  username: string;
  password: string;

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(
    public loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit() {}

  signIn() {
    this.loginService.signIn({
      user_name: this.username,
      password: this.password
    }).subscribe(response => {
      if (response === 'usuario incorrecto' || response === 'password incorrecto') {
        if (response === 'usuario incorrecto') {
          Swal.fire({
            title: '¡Error!',
            text: 'Usuario incorrecto.',
            type: 'error',
            confirmButtonText: 'Aceptar'
          });
        }
        if (response === 'password incorrecto') {
          Swal.fire({
            title: '¡Error!',
            text: 'Password incorrecto.',
            type: 'error',
            confirmButtonText: 'Aceptar'
          });
        }
      } else {
        this.router.navigate(['/inicio']);
      }
    });
  }
}
