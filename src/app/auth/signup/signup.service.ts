import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs';

// type EntityResponseType = HttpResponse<any>;
// type EntityArrayResponseType = HttpResponse<any[]>;

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  public resourceUrl = 'http://localhost:4000/api/v1/users';

  constructor(protected http: HttpClient) { }
 /**
  * Metodo para llamar al API y añadir un nuevo user.
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


