import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Book } from 'src/app/model/interfaces/book.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClientSevice: HttpClient) {}

  getAllActiveBooks(): Observable<Book[]> {
    return this.httpClientSevice
      .get<Book[]>(`${environment.baseApiUrl}books`)
      .pipe(map((books) => books.filter((book) => book.deletedAt === null)));
  }

  getSingleBook(id: number): Observable<Book> {
    return this.httpClientSevice.get<Book>(
      `${environment.baseApiUrl}books/${id}`
    );
  }

  delete(book: Book): Observable<any> {
    return this.httpClientSevice.delete(
      `${environment.baseApiUrl}books/${book.id}`
    );
  }

  softDelete(book: Book): Observable<Book> {
    const today = new Date().toISOString();
    return this.httpClientSevice.patch<Book>(
      `${environment.baseApiUrl}books/${book.id}`,
      { deletedAt: today }
    );
  }
}
