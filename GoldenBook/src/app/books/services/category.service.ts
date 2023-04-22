import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/core/interfaces/category.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClientSevice: HttpClient) {}

  getAll(): Observable<Category[]> {
    return this.httpClientSevice.get<Category[]>(
      `${environment.baseApiUrl}categories`
    );
  }
}
