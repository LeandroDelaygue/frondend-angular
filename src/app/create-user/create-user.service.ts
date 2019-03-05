import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {RestResponse} from '../model/restResponse.model';
import {UserModel} from '../model/user.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private httpClient: HttpClient) { }

  public validate(user: UserModel) {
    let isvalid = true;

    if (!user.firstName) {
      isvalid = false;
    }

    return isvalid;
  }
  public saveOrUpdate(user: UserModel): Observable<RestResponse> {
       return this.httpClient.post <RestResponse> ('http://localhost:8080/saveOrUpdate', user);
  }
}
