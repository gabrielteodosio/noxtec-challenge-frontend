import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  authService = inject(AuthService)

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.authService.user()) {
      this.router.navigate(['/agenda']);
    }
  }
  
}
