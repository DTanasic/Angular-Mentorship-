import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Country } from 'src/app/model/interfaces/country.interface';
import { User } from 'src/app/model/interfaces/user.interface';

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

  registerUsers(data: any): Observable<User[]> {
    return this.httpClientSevice.post<User[]>(
      `${environment.baseApiUrl}users`,
      data
    );
  }
}
