import { Component, computed, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { LoginFormComponent } from "../../components/login-form/login-form.component";

@Component({
  selector: 'app-login',
  imports: [LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  authService = inject(AuthService)
  isUserLoggedIn = computed(() => this.authService.token() != null);

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.isUserLoggedIn()) {
      this.router.navigate(['/agenda']);
    }
  }
}
