import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

type EntityResponseType = HttpResponse<any>;
type EntityArrayResponseType = HttpResponse<any[]>;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public resourceUrl ='http://localhost:4000/api/v1/users/signIn';
  /**
   *
   * @param http
   */
  constructor(protected http: HttpClient) { }

  /**
   * Metodo para realizar el login al sistema de un usuario
   * username:
   * password:
   * @param user
   */
  login(user: any): Observable<EntityResponseType> {
    return this.http.post<any>(this.resourceUrl, user, { observe: 'response' });
  }
}
