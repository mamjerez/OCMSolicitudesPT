import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SigninService } from './signin.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { LogeadoService } from '../../services/logeado.service';
// import { ISingIn } from '../../shared/models/singin.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  userName: string;
  password: string;

  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //     this.email.hasError('email') ? 'Not a valid email' :
  //       '';
  // }

  constructor(
    public loginService: SigninService,
    private router: Router,
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private logeadoService: LogeadoService
    ) { }

  ngOnInit() {}

  signIn() {
    this.loginService.signIn({
      userName: this.userName,
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
        const token = response.token;
        this.localStorage.store('authenticationToken', token);
        this.logeadoService.estaLogeado();
        this.router.navigate(['/inicio']);
      }
    }, error => {
      console.log(error);
    });
  }
}
