import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { ExitSingleBookComponent } from '../components/exit-single-book/exit-single-book/exit-single-book.component';
import { SinglebookComponent } from '../components/singlebook/singlebook.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDeactivateGuardGuard implements CanDeactivate<unknown> {
  constructor(private matDialog: MatDialog) {}

  canDeactivate(
    component: SinglebookComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const modal = this.matDialog.open(ExitSingleBookComponent);
    const resaul$ = modal.afterClosed().pipe<boolean>(
      map((shouldClose) => {
        if (shouldClose) {
          return true;
        } else {
          return false;
        }
      })
    );
    return resaul$;
  }
}
