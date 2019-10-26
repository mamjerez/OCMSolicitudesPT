import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

type EntityResponseType = HttpResponse<any>;
type EntityArrayResponseType = HttpResponse<any[]>;

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  public resourceUrl = 'http://localhost:4000/api/v1/users/signIn';

  constructor(public http: HttpClient,
              private localStorage: LocalStorageService,
              private sessionStorage: SessionStorageService
  ) { }

  /**
   * Metodo para llamar al API y comprobar si existe el usuario y su password.
   * @param user = objeto
   */
  // agregar el header de autenticacion al http.get profiles
  //
  // signIn(user: any) {
  //   const token = this.localStorage.retrieve('authenticationToken');
  //   let headers: HttpHeaders = new HttpHeaders();
  //   headers = headers.append('Authorization', 'auth-token ' + token);
  //   try {
  //     return this.http.post(this.resourceUrl, user, { headers });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
   // model
  // { token: string}
  signIn(user: any) {
    // const token = this.localStorage.retrieve('authenticationToken');
    // let headers: HttpHeaders = new HttpHeaders();
    // headers = headers.append('Authorization', 'auth-token ' + token);
    try {
      return this.http.post(this.resourceUrl, user);
    } catch (error) {
      console.log(error);
    }
  }


}


