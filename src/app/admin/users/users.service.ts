import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public resourceUrl = 'http://localhost:4000/api/v1/users';


  constructor(public http: HttpClient) { }


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
   * Metodo para llamar al API y dete user.
   */
deleteUser(id: any) {
    // try {
    //   return this.http.delete(this.resourceUrl, id);
    // } catch (error) {
    //   console.log(error);
    // }
  }
}
