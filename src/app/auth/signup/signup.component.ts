import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/user.model';
// import { FormControl } from '@angular/forms';
import { User } from './../../shared/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  nombre: string;
  usuario: IUser;

  constructor() { }

  ngOnInit() {
    this.usuario = new User();
  }

  signUp() {
    console.log(this.nombre);
    }
}
