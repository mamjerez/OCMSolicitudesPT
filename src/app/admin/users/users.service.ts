import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';


import { ISingIn } from '../../shared/models/singin.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public resourceUrl = 'http://localhost:4000/api/v1/users';
  public resourceUrlRoles = 'http://localhost:4000/api/v1/userRols';

  /**
   *
   * @param http /user  getOne , getAll GET
   * /user POST create
   * /user PUT update
   * /user DELETE eliminar
   */
  constructor(public http: HttpClient) { }

  /**
   * Metodo para llamar al API y recuperar un user.
   * param: id
   */
  getUser(id: number) {
    try {
      return this.http.get(`${this.resourceUrl}/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Metodo para llamar al API y recuperar todos los users.
   */
  allUsers() {
    try {
      return this.http.get(this.resourceUrl);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Metodo para llamar al API y delete user.
   */
  deleteUser(id: number) {
    try {
      // console.log(`http://localhost:4000/api/v1/users/${id}`);
      // return this.http.delete(`http://localhost:4000/api/v1/users/${id}` );
      return this.http.delete(`${this.resourceUrl}/${id}`);
    } catch (error) {
      //  console.log(error);
    }
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  signIn(user: any) {
    // Los errores se manejan signin.component.ts.
    // Los services deben realizar unicamente las funciones imprescindibles.
    try {
      // Es necesario definir la Interface ISingIn para que tenga la propiedad token.
      return this.http.post<ISingIn>(`${this.resourceUrl}/signin`, user);
    } catch (error) {
      console.log(error);
    }
  }

  //  signUp(user: any) {
  //   return this.http.post(`${this.resourceUrl}/${user}}`, { observe: 'response' });
  //     }
  signUp(user: any) {
    try {
      return this.http.post(this.resourceUrl, user);
    } catch (error) {
      console.log(error);
    }
  }

  update(user: any) {
    try {
      return this.http.put(`${this.resourceUrl}`, user);
    } catch (error) {
      console.log(error);
    }
  }

  findEmail(email: string, idUser: number) {
    try {
      return this.http.get(`${this.resourceUrl}/email/${email}/${idUser}`);
    } catch (error) {
      console.log(error);
    }
  }

  findUserName(userName: string, idUser: number) {
    try {
      return this.http.get(`${this.resourceUrl}/userName/${userName}/${idUser}`);
    } catch (error) {
      console.log(error);
    }
  }

  getRoles(userIdUser: number) {
    try {
      return this.http.get(`${this.resourceUrlRoles}/user/${userIdUser}`);
    } catch (error) {
    console.log(error);
    }
  }

}
