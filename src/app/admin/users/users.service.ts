import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public resourceUrl = 'http://localhost:4000/api/v1/users';

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
}
