import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {
  public resourceUrl = 'http://localhost:4000/api/v1/documentos';

  constructor(public http: HttpClient) { }

  get(id: number) {
    try {
      return this.http.get(`${this.resourceUrl}/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  getAll() {
    try {
      return this.http.get(this.resourceUrl);
    } catch (error) {
      console.log(error);
    }
  }

  delete(id: number) {
    try {
      return this.http.delete(`${this.resourceUrl}/${id}`);
    } catch (error) {
       console.log(error);
    }
  }

  update(element: any) {
    try {
      return this.http.put(`${this.resourceUrl}`, element);
    } catch (error) {
      console.log(error);
    }
  }

}
