import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/interfaces/login.interface';
import { LoginServiceService } from '../services/login-service.service';
import { take } from 'rxjs';

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
          localStorage.setItem('user_logged', JSON.stringify(data[0]));
          console.log(data);
          this.router.navigateByUrl('/');
        } else {
          alert('User not found,try again!');
        }
      });
  }
}
