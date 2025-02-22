import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { routes } from '../../app.routes';

import { AuthService } from '../../services/auth.service';
import { FilterRoutesByAuthPipe } from '../../pipes/filter-routes-by-auth.pipe';

@Component({
  selector: 'app-header',
  imports: [RouterLink, FilterRoutesByAuthPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  authService = inject(AuthService);

  isUserLogged = computed(() => this.authService.user() != null);

  title = signal('Desafio Noxtec')
  appRoutes = routes.filter(route => route.showOnNav)

  constructor(private router: Router) {}

  handleLogOutUser() {
    this.authService.logOutUser();
    this.router.navigate(['/'])
  }

}
