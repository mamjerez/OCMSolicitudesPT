import { Injectable } from '@angular/core';
// import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
// import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { ISingIn } from '../../shared/models/singin.model';


// import { Observable } from 'rxjs';
// import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

// type EntityResponseType = HttpResponse<any>;
// type EntityArrayResponseType = HttpResponse<any[]>;

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  public resourceUrl = 'http://localhost:4000/api/v1/users/signIn';
  // token: string;

  constructor(
    public http: HttpClient
    // private localStorage: LocalStorageService
    ) { }

  /**
   * Metodo para llamar al API y comprobar si existe el usuario y su password.
   * @param user = objeto
   */
  signIn(user: any) {
    // Los errores se manejan signin.component.ts.
    // Los services deben realizar unicamente las funciones imprescindibles.
    try {
      // Es necesario definir la Interface ISingIn para que tenga la propiedad token.
      return this.http.post<ISingIn>(this.resourceUrl, user);
    } catch (error) {
      console.log(error);
    }
  }
}


