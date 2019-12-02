import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { UsersService } from '../admin/users/users.service';

@Injectable({
  providedIn: 'root'
})
export class LogeadoService {
  isLogeado = false;
  private idUser: number;
  public rol: string;

  constructor(private localStorage: LocalStorageService, public userService: UsersService) { }

  public estaLogeado() {
    if (this.localStorage.retrieve('authenticationToken')) {
      this.isLogeado = true;
    } else {
      this.isLogeado = false;
    }
    return this.isLogeado;
  }

  public setIdUser(idUser: number) {
    this.idUser = idUser;
    console.log(this.idUser);
    this.userService.getRoles(this.idUser).subscribe(resp => {
      this.getRol(resp, 'Administrador');
    });
  }

  public getIdUser() {
    console.log(this.idUser);
    return this.idUser;
  }

  private getRol(data: any, paramRol: string) {
    const rol = data.filter(r => r.descripcion === paramRol);
    this.rol = rol ? rol[0].descripcion : null;
  }
}
