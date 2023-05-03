import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userLogged = localStorage.getItem('user_logged');
    const obj = JSON.parse(userLogged!);
    if (obj.role === 'user') {
      return false;
    } else {
      return true;
    }
  }
}
