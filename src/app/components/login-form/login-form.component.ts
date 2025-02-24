import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError } from 'rxjs';

import { LoginFormType } from '../../model/login-form.type';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  authService = inject(AuthService);

  loginForm: FormGroup<LoginFormType>;

  submitted = signal(false)

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted.set(true);
    
    const { login: email, password: senha } = this.loginForm.value;
    if (this.loginForm.invalid || !email || !senha) {
      return;
    }

    this.authService
      .login(email, senha)
      .pipe(
        catchError((error) => {
          console.error(error);
          throw error;
        })
      )
      .subscribe((data) => {
        this.authService.token.set(data.token);

        localStorage.setItem('token', data.token);
        this.router.navigate(['/agenda']);
        this.loginForm.reset();
      });

    this.submitted.set(false);
  }

  onReset() {
    this.submitted.set(false);
    this.loginForm.reset();
  }

}
