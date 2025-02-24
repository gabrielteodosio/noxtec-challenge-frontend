import { Component, inject, signal } from '@angular/core';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { User } from '../../model/user.type';
import { RegisterFormType } from '../../model/register-form.type';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  authService = inject(AuthService);

  registerForm: FormGroup<RegisterFormType>;

  submitted = signal(false);

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.email]],
      senha: ['', [Validators.required]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted.set(true);

    if (this.registerForm.invalid) {
      return;
    }

    const formData = this.registerForm.value as User;

    this.authService
      .register(formData)
      .pipe(
        catchError((error) => {
          console.error(error);
          throw error;
        })
      )
      .subscribe(() => {
        this.router.navigate(['/']);
      });

    this.registerForm.reset();
    this.submitted.set(false);
  }

  onReset() {
    this.submitted.set(false);
    this.registerForm.reset();
  }
}
