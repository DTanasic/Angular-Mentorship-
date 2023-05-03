import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/interfaces/login.interface';

import { take } from 'rxjs';
import { LoginServiceService } from '../../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: Login = {
    email: '',
    password: '',
  };

  constructor(
    private loginService: LoginServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  loginUser() {
    this.loginService
      .login(this.form)
      .pipe(take(1))
      .subscribe((data: any) => {
        if (data.length) {
          localStorage.setItem(
            'user_logged',
            JSON.stringify({
              firstName: data[0].firstName,
              lastName: data[0].lastName,
              role: data[0].role,
            })
          );
          this.router.navigateByUrl('/');
        } else {
          alert('User not found,try again!');
        }
      });
  }
}
