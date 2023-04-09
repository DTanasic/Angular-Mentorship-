import { Component, OnInit } from '@angular/core';
import { SidebarService } from './core/services/sidebar.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isVisible: boolean = false;

  title = 'GoldenBook';

  unsubscribe$: Subject<void> = new Subject();

  constructor(private sidebarService: SidebarService) {}
  ngOnInit(): void {
    this.toggleVisable();
  }

  unsubscribeAll(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private toggleVisable(): void {
    this.sidebarService.togleSideNav$
      .asObservable()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => (this.isVisible = value));
  }
}
