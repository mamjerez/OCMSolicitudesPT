import { Injectable } from '@angular/core';
// import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

// import { Observable } from 'rxjs';
// import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

// type EntityResponseType = HttpResponse<any>;
// type EntityArrayResponseType = HttpResponse<any[]>;

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  public resourceUrl = 'http://localhost:4000/api/v1/users/signIn';

  // constructor(public http: HttpClient,
  //             private localStorage: LocalStorageService,
  //             private sessionStorage: SessionStorageService
  // ) { }

  constructor(public http: HttpClient) { }


  /**
   * Metodo para llamar al API y comprobar si existe el usuario y su password.
   * @param user = objeto
   */
  signIn(user: any) {
    // Los errores se manejan signin.component.ts
    try {
      return this.http.post(this.resourceUrl, user);
    } catch (error) {
      console.log(error);
    }
  }
}


