import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Country } from 'src/app/model/interfaces/country.interface';
import { Register } from 'src/app/model/interfaces/login.interface';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private httpClientSevice: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.httpClientSevice.get<Country[]>(
      `${environment.baseApiUrl}countries`
    );
  }

  registerUsers(data: Register): Observable<void> {
    return this.httpClientSevice.post<void>(
      `${environment.baseApiUrl}users`,
      data
    );
  }

  isAdmin(): boolean {
    const userLogged = localStorage.getItem('user_logged');
    const logedUser = JSON.parse(userLogged!);
    return logedUser.role === 'admin';
  }
}
