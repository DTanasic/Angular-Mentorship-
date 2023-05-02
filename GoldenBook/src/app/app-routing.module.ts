import { NotFoundComponent } from './shared/not-found/not-found.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { InitialPageComponent } from './core/components/initial-page/initial-page.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthCanLoadGuard } from './core/guards/auth-can-load.guard';
import { RegisterComponent } from './core/components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: InitialPageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../app/books/books.module').then(
            (module) => module.BooksModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('../app/admin/admin.module').then(
            (module) => module.AdminModule
          ),
        canLoad: [AuthCanLoadGuard],
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
