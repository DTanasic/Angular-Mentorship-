import { StarWars } from './models/starwars.interface';
import { Component } from '@angular/core';
import {
  Observable,
  interval,
  map,
  fromEvent,
  debounceTime,
  combineLatest,
  of,
  forkJoin,
} from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { Brazil } from './models/brazil.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angularrxjs';

  currentTime$ = new Observable<Date>();
  searchInput$ = new Observable<string>();
  input1$ = new Observable<string>();
  input2$ = new Observable<string>();
  result$ = new Observable<any>();
  data1$ = new Observable<AjaxResponse<StarWars>>();
  data2$ = new Observable<AjaxResponse<Brazil>>();
  combinedResault$ = new Observable<any>();

  constructor() {}

  ngOnInit(): void {
    this.searchInput$ = fromEvent(
      document.getElementById('input')!,
      'keyup'
    ).pipe(
      map((date: Event) => {
        return (date.target as HTMLInputElement).value;
      }),
      debounceTime(2000)
    );

    this.searchInput$.subscribe((date: string) => {
      console.log('text value:', date);
    });

    this.input1$ = fromEvent(document.getElementById('input1')!, 'keyup').pipe(
      map((date: Event) => {
        return (date.target as HTMLInputElement).value;
      })
    );

    this.input2$ = fromEvent(document.getElementById('input2')!, 'keyup').pipe(
      map((date: Event) => {
        return (date.target as HTMLInputElement).value;
      })
    );

    this.result$ = combineLatest([this.input1$, this.input2$]);
    this.result$.subscribe((date: string[]) => {
      console.log(date);
    });

    combineLatest([of(1), of()]).subscribe((date) => {
      console.log(date);
    });

    this.data1$ = ajax<StarWars>(
      'https://swapi.dev/api/planets/3/?format=json'
    );
    this.data2$ = ajax<Brazil>('https://viacep.com.br/ws/01001000/json/');
    this.combinedResault$ = forkJoin([this.data1$, this.data2$]);
    this.combinedResault$.subscribe((data) => {
      console.log(data);
    });
  }

  Task1Start() {
    this.currentTime$ = interval(1000).pipe(
      map((data) => {
        return new Date();
      })
    );

    this.currentTime$.subscribe((data) => {
      console.log(data);
    });
  }
}
