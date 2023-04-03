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
  retry,
  catchError,
  throwError,
  Subject,
  takeUntil,
} from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { Brazil } from './models/brazil.interface';
import { Rick } from './models/rick,interface';

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
  input11$ = new Observable<string>();
  input22$ = new Observable<string>();
  result1$ = new Observable<any>();
  sum$ = new Observable<any>();
  data3$ = new Observable<AjaxResponse<Rick>>();
  timer$ = new Observable<number>();
  private unsubscribe$ = new Subject<boolean>();

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

    this.input11$ = fromEvent(
      document.getElementById('input11')!,
      'keyup'
    ).pipe(
      map((data: Event) => {
        return (data.target as HTMLInputElement).value;
      })
    );
    this.input22$ = fromEvent(
      document.getElementById('input22')!,
      'keyup'
    ).pipe(
      map((data: Event) => {
        return (data.target as HTMLInputElement).value;
      })
    );
    this.result1$ = combineLatest([this.input11$, this.input22$]);
    this.result1$.subscribe((data: string[]) => {
      console.log(data);
    });
    this.data3$ = ajax<Rick>(
      'https://rickandmortyapi.com/api/character/108    '
    );
    this.data3$.pipe(
      retry(3),
      catchError((err) => {
        console.log('Api not found');
        return throwError(err);
      })
    );
    this.data3$.subscribe(
      (res) => console.log('HTTP Response', res),
      (err) => console.log('HTTP error', err),
      () => console.log('HTTP request complete')
    );
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

  startTimer() {
    this.timer$ = interval(1000).pipe(takeUntil(this.unsubscribe$));
    this.timer$.subscribe((data) => {
      console.log(data);
    });
  }

  stopTimer() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
