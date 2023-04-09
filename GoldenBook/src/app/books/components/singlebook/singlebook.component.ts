import { BookService } from './../../services/book.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Book } from 'src/app/model/interfaces/book.model';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.scss'],
})
export class SinglebookComponent implements OnInit {
  bookId: string | null = '';
  book?: Book | undefined;
  private unsubscribe$: Subject<void> = new Subject();
  constructor(
    private activatedRouter: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.getBookbyId();
  }

  getBookbyId() {
    let bookId: number = Number(
      this.activatedRouter.snapshot.paramMap.get('id')
    );
    this.bookService
      .getById(bookId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((book) => (this.book = book));
  }
}
