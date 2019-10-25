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

  constructor(protected http: HttpClient,
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService
    ) { }

  /**
   * Metodo para realizar el login al sistema de un usuario.
   * username:
   * password:
   */
  // signIn(username: string , password: string): Observable<EntityResponseType> {
  //   console.log('Estoy en login.service ' + username + ' ' + password);
  //   try {
  //        return this.http.post<any>(this.resourceUrl, [username, password], { observe: 'response' });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

 /**
  * Metodo para llamar al API y comprobar si existe el usuario y su password.
  * @param user = objeto
  */
  //agregar el header de autenticacion al http.get profiles
  //
  signIn(user: any) {
    const token = this.localStorage.retrieve('authenticationToken');
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', 'auth-token ' + token);
    try {
         return this.http.post (this.resourceUrl, user, {headers});
    } catch (error) {
      console.log(error);
    }
  }


}


