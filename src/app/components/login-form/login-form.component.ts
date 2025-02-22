import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { LoginRequestType } from '../../model/login-request.type';

@Component({
  selector: 'app-login-form',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  loginForm: FormGroup<LoginRequestType>;

  submitted = signal(false)

  constructor(private formBuilder: FormBuilder) {
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

    if (this.loginForm.invalid) {
      return;
    }

    console.log('Form Data: ', this.loginForm.value);

    // Here you would typically make an API call
    // this.userService.createUser(this.userForm.value).subscribe(...)

    // Reset form after successful submission
    // this.loginForm.reset();
    this.submitted.set(false);
  }

  onReset() {
    this.submitted.set(false);
    this.loginForm.reset();
  }

}
