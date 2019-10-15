import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

type EntityResponseType = HttpResponse<any>;
type EntityArrayResponseType = HttpResponse<any[]>;

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  public resourceUrl = 'http://localhost:4000/api/v1/users';

  constructor(protected http: HttpClient) { }

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
  * Metodo para llamar al API y añdir un nuevo user.
  * @param user = objeto
  */

  signUp(user: any) {
    try {
         return this.http.post (this.resourceUrl, user);
    } catch (error) {
      console.log(error);
    }
  }


}


