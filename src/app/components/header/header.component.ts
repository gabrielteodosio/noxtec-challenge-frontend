import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { routes } from '../../app.routes';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = signal('Desafio Noxtec')
  appRoutes = routes.filter(route => route.showOnNav)

}
