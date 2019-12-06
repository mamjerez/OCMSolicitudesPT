import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  public resourceUrl = 'http://localhost:4000/api/v1/solicitudes';
  private idSolicitud: number;

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
  get(id: number) {
    try {
      return this.http.get(`${this.resourceUrl}/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Metodo para llamar al API y recuperar todos los users.
   */
  all() {
    try {
      return this.http.get(this.resourceUrl);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Metodo para llamar al API y delete user.
   */
  delete(id: number) {
    try {
      return this.http.delete(`${this.resourceUrl}/${id}`);
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

  public setIdSolicitud(idSolicitud: number) {
    this.idSolicitud = idSolicitud;
    // console.log(this.idSolicitud);
     }

  public getIdSolicitud() {
    // console.log(this.idSolicitud);
    return this.idSolicitud;
  }

}
