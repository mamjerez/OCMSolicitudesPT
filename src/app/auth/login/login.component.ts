import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

// import { IEmpleado, Empleado } from '../../shared/models/empleado.model';
// import { LoginService } from '../../shared/services/login.service';
// import { Router } from '@angular/router';
// import { LocalStorageService } from 'ngx-webstorage';
// import { MatSnackBar } from '@angular/material';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

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

  ngOnInit() {
    // this.empleado = new Empleado();
  }

  login() {
    // console.log(this.username);
    // console.log(this.password);
    this.loginService.login({user_name: this.username, password: this.password}).subscribe(response => {
      console.log('login ok');
    });
  }

  // openSnackBar(message: string, action: string) {
  //   this.snackBar.open(message, action, {
  //     duration: 2000,
  //   });
  // }
}
