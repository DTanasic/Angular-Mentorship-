import { Book } from '../../../model/interfaces/book.model';
import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/model/enum/categories.enum';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [
    {
      title: 'Money power',
      src: 'assets/img/money.jpg',
      surname: 'Name Surname:1998',
      category: 'Category:' + Categories.general,
      description:
        'Dictum pretium nulla nascetur diam malesuada curabitur lectus fames ornare posuere nec lacus.Parturient metus felis imperdiet! Curae; interdum consectetur nisl parturient aenean. Blandit diam class potenti eros.Vestibulum litora placerat ligula sapien eleifend orci rhoncus tincidunt convallis.',
      overview: './book',
    },
    {
      title: 'My First Love',
      src: 'assets/img/my-first-love.jpg',
      surname: 'Name Surname:2000',
      category: 'Category:' + Categories.general,
      description:
        'Dictum pretium nulla nascetur diam malesuada curabitur lectus fames ornare posuere nec lacus.Parturient metus felis imperdiet! Curae; interdum consectetur nisl parturient aenean. Blandit diam class potenti eros.Vestibulum litora placerat ligula sapien eleifend orci rhoncus tincidunt convallis.',
      overview: './book',
    },
    {
      title: 'My Little Life',
      src: 'assets/img/my-little-life.jpg',
      category: 'Category:' + Categories.general,
      surname: ' Name Surname:2005',
      description:
        'Dictum pretium nulla nascetur diam malesuada curabitur lectus fames ornare posuere nec lacus.Parturient metus felis imperdiet! Curae; interdum consectetur nisl parturient aenean. Blandit diam class potenti eros.Vestibulum litora placerat ligula sapien eleifend orci rhoncus tincidunt convallis.',
      overview: './book',
    },
    {
      title: 'The Lost Trip',
      src: 'assets/img/the-lost-trip.jpg',
      surname: 'Name Surname:2008',
      description:
        'Dictum pretium nulla nascetur diam malesuada curabitur lectus fames ornare posuere nec lacus.Parturient metus felis imperdiet! Curae; interdum consectetur nisl parturient aenean. Blandit diam class potenti eros.Vestibulum litora placerat ligula sapien eleifend orci rhoncus tincidunt convallis.',
      category: 'Category:' + Categories.history,
      overview: './book',
    },
    {
      title: 'Dark',
      src: 'assets/img/dark.jpg',
      surname: 'Name Surname:2010',
      category: 'Category:' + Categories.fantasy,
      description:
        'Dictum pretium nulla nascetur diam malesuada curabitur lectus fames ornare posuere nec lacus.Parturient metus felis imperdiet! Curae; interdum consectetur nisl parturient aenean. Blandit diam class potenti eros.Vestibulum litora placerat ligula sapien eleifend orci rhoncus tincidunt convallis.',
      overview: './book',
    },
    {
      title: 'Find Me',
      src: 'assets/img/find-me.jpg',
      surname: 'Name Surname:2021',
      category: 'Category:' + Categories.fantasy,
      description:
        'Dictum pretium nulla nascetur diam malesuada curabitur lectus fames ornare posuere nec lacus.Parturient metus felis imperdiet! Curae; interdum consectetur nisl parturient aenean. Blandit diam class potenti eros.Vestibulum litora placerat ligula sapien eleifend orci rhoncus tincidunt convallis.',
      overview: './book',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
