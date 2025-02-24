import { RegisterFormComponent } from "../../components/register-form/register-form.component";
import { Component, computed, inject, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [RegisterFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  authService = inject(AuthService)
  isUserLoggedIn = computed(() => this.authService.token() != null);

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.isUserLoggedIn()) {
      this.router.navigate(['/agenda']);
    }
  }
}
