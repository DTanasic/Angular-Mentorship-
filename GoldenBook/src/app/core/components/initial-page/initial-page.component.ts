import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss'],
})
export class InitialPageComponent implements OnInit {
  isVisible: boolean = false;

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
