import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class LogeadoService {
  isLogeado = false;

  constructor(private localStorage: LocalStorageService) { }

  public estaLogeado() {
    if (this.localStorage.retrieve('authenticationToken')) {
      this.isLogeado = true;
    } else {
      this.isLogeado = false;
    }
  }
}


