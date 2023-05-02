import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { Subject, take } from 'rxjs';
import { Country } from 'src/app/model/interfaces/country.interface';
import { User } from 'src/app/model/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  registerForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z]{2,10}$/),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z]{2,20}$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{2,10}$/),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{2,10}$/),
    ]),
    countryid: new FormControl(Validators.required),
  });
  public users: User[] = [];
  public countries: Country[] = [];

  private unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    this.getCountries();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  registerUser(data: any) {
    this.registerService.registerUsers(data).subscribe((users) => {
      this.users = users;
      alert('You are registered');
      this.router.navigateByUrl('/login');
    });
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  private getCountries() {
    this.registerService
      .getAllCountries()
      .pipe(take(1))
      .subscribe((countries) => {
        this.countries = countries;
      });
  }
}
