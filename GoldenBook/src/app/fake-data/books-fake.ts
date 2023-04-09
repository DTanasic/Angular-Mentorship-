import { Categories } from '../model/enum/categories.enum';
import { Book } from '../model/interfaces/book.model';

export const books: Book[] = [
  {
    id: 1,
    title: 'Money power',
    src: 'assets/img/money.jpg',
    surname: 'Name Surname:1998',
    category: 'Category:' + Categories.general,
    alt: 'Money power',
    description:
      'Dictum pretium nulla nascetur diam malesuada curabitur lectus fames ornare posuere nec lacus.Parturient metus felis imperdiet! Curae; interdum consectetur nisl parturient aenean. Blandit diam class potenti eros.Vestibulum litora placerat ligula sapien eleifend orci rhoncus tincidunt convallis.',
  },
  {
    id: 2,
    title: 'My First Love',
    src: 'assets/img/my-first-love.jpg',
    surname: 'Name Surname:2000',
    category: 'Category:' + Categories.general,
    alt: 'My First Love',
    description:
      'Dictum pretium nulla nascetur diam malesuada curabitur lectus fames ornare posuere nec lacus.Parturient metus felis imperdiet! Curae; interdum consectetur nisl parturient aenean. Blandit diam class potenti eros.Vestibulum litora placerat ligula sapien eleifend orci rhoncus tincidunt convallis.',
  },
  {
    id: 3,
    title: 'My Little Life',
    src: 'assets/img/my-little-life.jpg',
    category: 'Category:' + Categories.general,
    alt: 'My Little Life',
    surname: ' Name Surname:2005',
    description:
      'Dictum pretium nulla nascetur diam malesuada curabitur lectus fames ornare posuere nec lacus.Parturient metus felis imperdiet! Curae; interdum consectetur nisl parturient aenean. Blandit diam class potenti eros.Vestibulum litora placerat ligula sapien eleifend orci rhoncus tincidunt convallis.',
  },
  {
    id: 4,
    title: 'The Lost Trip',
    src: 'assets/img/the-lost-trip.jpg',
    surname: 'Name Surname:2008',
    alt: 'The Lost Trip',
    description:
      'Dictum pretium nulla nascetur diam malesuada curabitur lectus fames ornare posuere nec lacus.Parturient metus felis imperdiet! Curae; interdum consectetur nisl parturient aenean. Blandit diam class potenti eros.Vestibulum litora placerat ligula sapien eleifend orci rhoncus tincidunt convallis.',
    category: 'Category:' + Categories.history,
  },
  {
    id: 5,
    title: 'Dark',
    src: 'assets/img/dark.jpg',
    surname: 'Name Surname:2010',
    alt: 'Dark',
    category: 'Category:' + Categories.fantasy,
    description:
      'Dictum pretium nulla nascetur diam malesuada curabitur lectus fames ornare posuere nec lacus.Parturient metus felis imperdiet! Curae; interdum consectetur nisl parturient aenean. Blandit diam class potenti eros.Vestibulum litora placerat ligula sapien eleifend orci rhoncus tincidunt convallis.',
  },
  {
    id: 6,
    title: 'Find Me',
    src: 'assets/img/find-me.jpg',
    surname: 'Name Surname:2021',
    alt: 'Find Me',
    category: 'Category:' + Categories.fantasy,
    description:
      'Dictum pretium nulla nascetur diam malesuada curabitur lectus fames ornare posuere nec lacus.Parturient metus felis imperdiet! Curae; interdum consectetur nisl parturient aenean. Blandit diam class potenti eros.Vestibulum litora placerat ligula sapien eleifend orci rhoncus tincidunt convallis.',
  },
];
