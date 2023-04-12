import { OnInit, Component, OnDestroy } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Subject, takeUntil } from 'rxjs';
import { Book } from 'src/app/model/interfaces/book.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  private unsubscribe$ = new Subject<void>();
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getAllBooks();
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getAllBooks() {
    this.bookService
      .getAll()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((books) => {
        this.books = books;
      });
  }

  deleteBook(book: Book) {
    this.bookService
      .delete(book)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        console.log(data);
        this.bookService
          .getAll()
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe((books) => {
            this.books = books;
          });
      });
  }
}
