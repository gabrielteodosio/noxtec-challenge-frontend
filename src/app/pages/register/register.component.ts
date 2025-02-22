import { Component, inject, OnInit } from '@angular/core';

import { RegisterFormComponent } from "../../components/register-form/register-form.component";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RegisterFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  authService = inject(AuthService)

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.authService.user()) {
      this.router.navigate(['/agenda']);
    }
  }
  
}
