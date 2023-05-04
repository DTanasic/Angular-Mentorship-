import { Pipe, PipeTransform } from '@angular/core';
import { Book } from 'src/app/model/interfaces/book.model';

@Pipe({
  name: 'fullname',
})
export class FullnamePipe implements PipeTransform {
  transform(book: Book): string {
    return `${book.authorName} ${book.authorSurname}`;
  }
}
