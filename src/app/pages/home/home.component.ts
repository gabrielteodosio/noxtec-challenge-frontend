import { Component, computed, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router'
;
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  authService = inject(AuthService)
  isUserLoggedIn = computed(() => this.authService.token() != null);

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.isUserLoggedIn()) {
      this.router.navigate(['/agenda']);
    }
  }
}
