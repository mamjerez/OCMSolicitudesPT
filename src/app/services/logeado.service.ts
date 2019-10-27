import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class LogeadoService {
  logeado: string;
  isLogeado: boolean;

  constructor(private localStorage: LocalStorageService) { }

  public estaLogeado(): string {
    if (this.localStorage.retrieve('authenticationToken')) {
      this.logeado = 'logeado';
      this.isLogeado = true;
    } else {
      this.logeado = 'NO logeado';
      this.isLogeado = false;
    }
    console.log('¿Esta logeado? ' + this.logeado);
    return this.logeado;
    }
  }


