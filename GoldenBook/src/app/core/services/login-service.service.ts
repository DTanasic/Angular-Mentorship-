import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/model/interfaces/login.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(private httpclient: HttpClient) {}

  login(user: Login) {
    return this.httpclient.get(
      `${environment.baseApiUrl}users?email=${user.email}&password=${user.password}`
    );
  }
}
