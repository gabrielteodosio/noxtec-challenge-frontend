import { Component, computed, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContatoRegisterFormComponent } from "../components/contato-register-form/contato-register-form.component";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-contato-register',
  imports: [ContatoRegisterFormComponent],
  templateUrl: './contato-register.component.html',
  styleUrl: './contato-register.component.scss'
})
export class ContatoRegisterComponent implements OnInit {
  authService = inject(AuthService);
  isUserLoggedIn = computed(() => this.authService.token() !== null);

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!this.isUserLoggedIn()) {
      this.router.navigate(['/'])
    }
  }
}
