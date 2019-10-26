import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public resourceUrl = 'http://localhost:4000/api/v1/users/profile';

  constructor(public http: HttpClient) {
  }

  query(req?: any): Observable<any> {
    // const options = createRequestOption(req);
    return this.http
      .get<any>(this.resourceUrl, { observe: 'response' });
  }
}
