import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { categories } from 'src/app/fake-data/categories-fake';
import { Categories } from 'src/app/model/enum/categories.enum';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Categories[] = categories;
  constructor() {}

  getAll(): Observable<Categories[]> {
    return of(this.categories);
  }
}
