import { Component, Input, OnInit } from '@angular/core';
import { Categories } from '../../../model/enum/categories.enum';
import { Book } from '../../../model/interfaces/book.model';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.scss'],
})
export class SinglebookComponent implements OnInit {
  @Input() book!: Book;

  constructor() {}
  books: Book[] = [
    {
      title: 'Money power',
      src: 'assets/img/money.jpg',
      surname: 'Name Surname:1998',
      category: 'Category:' + Categories.general,
      description:
        'Dictum pretium nulla nascetur diam malesuada curabitur lectus fames ornare posuere nec lacus.Parturient metus felis imperdiet! Curae; interdum consectetur nisl parturient aenean. Blandit diam class potenti eros.Vestibulum litora placerat ligula sapien eleifend orci rhoncus tincidunt convallis.',
      overview: 'details/money-power.html',
    },
    {
      title: 'My First Love',
      src: 'assets/img/my-first-love.jpg',
      surname: 'Name Surname:2000',
      category: 'Category:' + Categories.general,
      description:
        'Dictum pretium nulla nascetur diam malesuada curabitur lectus fames ornare posuere nec lacus.Parturient metus felis imperdiet! Curae; interdum consectetur nisl parturient aenean. Blandit diam class potenti eros.Vestibulum litora placerat ligula sapien eleifend orci rhoncus tincidunt convallis.',
      overview: 'details/my-first-love.html',
    },
    {
      title: 'My Little Life',
      src: 'assets/img/my-little-life.jpg',
      category: 'Category:' + Categories.general,
      surname: ' Name Surname:2005',
      description:
        'Dictum pretium nulla nascetur diam malesuada curabitur lectus fames ornare posuere nec lacus.Parturient metus felis imperdiet! Curae; interdum consectetur nisl parturient aenean. Blandit diam class potenti eros.Vestibulum litora placerat ligula sapien eleifend orci rhoncus tincidunt convallis.',
      overview: 'details/my-litle-life.html',
    },
    {
      title: 'The Lost Trip',
      src: 'assets/img/the-lost-trip.jpg',
      surname: 'Name Surname:2008',
      description:
        'Dictum pretium nulla nascetur diam malesuada curabitur lectus fames ornare posuere nec lacus.Parturient metus felis imperdiet! Curae; interdum consectetur nisl parturient aenean. Blandit diam class potenti eros.Vestibulum litora placerat ligula sapien eleifend orci rhoncus tincidunt convallis.',
      category: 'Category:' + Categories.history,
      overview: 'details/the-lost-trip.html',
    },
    {
      title: 'Dark',
      src: 'assets/img/dark.jpg',
      surname: 'Name Surname:2010',
      category: 'Category:' + Categories.fantasy,
      description:
        'Dictum pretium nulla nascetur diam malesuada curabitur lectus fames ornare posuere nec lacus.Parturient metus felis imperdiet! Curae; interdum consectetur nisl parturient aenean. Blandit diam class potenti eros.Vestibulum litora placerat ligula sapien eleifend orci rhoncus tincidunt convallis.',
      overview: 'details/dark.html',
    },
    {
      title: 'Find Me',
      src: 'assets/img/find-me.jpg',
      surname: 'Name Surname:2021',
      category: 'Category:' + Categories.fantasy,
      description:
        'Dictum pretium nulla nascetur diam malesuada curabitur lectus fames ornare posuere nec lacus.Parturient metus felis imperdiet! Curae; interdum consectetur nisl parturient aenean. Blandit diam class potenti eros.Vestibulum litora placerat ligula sapien eleifend orci rhoncus tincidunt convallis.',
      overview: 'details/find-me .html',
    },
  ];
  ngOnInit(): void {}
}
