import { Injectable } from '@angular/core';
import { CanLoad, UrlTree } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanLoad {
  constructor(private registerService: RegisterService) {}
  canLoad(): boolean {
    return this.registerService.isAdmin();
  }
}
