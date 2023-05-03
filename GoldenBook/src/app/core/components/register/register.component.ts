import { Component, OnDestroy, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { Subject, take } from 'rxjs';
import { Country } from 'src/app/model/interfaces/country.interface';
import { Router } from '@angular/router';
import { Roles } from 'src/app/model/enum/roles.emum';

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
      Validators.pattern(/^\w{2,10}$/),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w{2,10}$/),
    ]),
    countryid: new FormControl('', Validators.required),
  });
  public date = new Date();
  public countries: Country[] = [];

  private unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    const confirmPassword = this.registerForm.get('confirmPassword');

    const passwordCheck = this.registerForm.get('password');

    this.confirmPasswordValidation(confirmPassword as FormControl);
    this.confirmPasswordValidation(passwordCheck as FormControl);
    this.getCountries();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  registerUser() {
    const formValue = this.registerForm.value;
    this.registerService
      .registerUsers({
        contryId: +formValue.countryid!,
        firstName: formValue.firstName!,
        lastName: formValue.lastName!,
        email: formValue.email!,
        password: formValue.password!,
        role: Roles.user,
        createdAt: new Date().toISOString(),
      })
      .subscribe(() => {
        alert('You are registered');
        this.router.navigateByUrl('/login');
      });
  }

  private confirmPasswordValidation(control: FormControl) {
    const confirmPassword = this.registerForm.get('confirmPassword');
    const passwordCheck = this.registerForm.get('password');

    control?.valueChanges.subscribe(() => {
      const passwordMatch = passwordCheck?.value;
      const confirmPasswordMatch = confirmPassword?.value;
      if (passwordMatch != confirmPasswordMatch) {
        confirmPassword?.setErrors({ PasswordMatch: true });
      } else {
        confirmPassword?.setErrors({ PasswordMatch: null });
        confirmPassword?.updateValueAndValidity();
      }
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
