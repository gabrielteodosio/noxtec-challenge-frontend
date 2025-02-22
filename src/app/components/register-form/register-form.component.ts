import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterRequestType } from '../../model/register-request.type';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {

  registerForm: FormGroup<RegisterRequestType>;

  submitted = signal(false);

  nome = signal<string>('');
  email = signal<string>('');
  password = signal<string>('');

  constructor(private formBuilder: FormBuilder) {
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

    console.log('Form Data: ', this.registerForm.value);

    // Here you would typically make an API call
    // this.userService.createUser(this.userForm.value).subscribe(...)

    // Reset form after successful submission
    // this.registerForm.reset();
    this.submitted.set(false);
  }

  onReset() {
    this.submitted.set(false);
    this.registerForm.reset();
  }
}
