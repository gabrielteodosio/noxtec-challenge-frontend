import { Route as AngularRoute } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export interface AppRoute extends AngularRoute {
  name?: string
  showOnNav: boolean
}

export const routes: AppRoute[] = [
  {
    path: '',
    name: 'Home',
    showOnNav: false,
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/home/home.component').then(m => m.HomeComponent);
    },
  },
  {
    path: 'login',
    name: 'Login',
    showOnNav: true,
    loadComponent: () => {
      return import('./pages/login/login.component').then(m => m.LoginComponent);
    }
  },
  {
    path: 'register',
    name: 'Registrar',
    showOnNav: false,
    loadComponent: () => {
      return import('./pages/register/register.component').then(m => m.RegisterComponent);
    }
  },
  {
    path: 'todos',
    name: 'Todos',
    showOnNav: true,
    canActivate: [authGuard],
    loadComponent: () => {
      return import('./pages/todos/todos.component').then(m => m.TodosComponent);
    },
  },
  {
    path: 'agenda',
    name: 'Agenda',
    showOnNav: true,
    canActivate: [authGuard],
    loadChildren: () => ([
      {
        path: '',
        name: 'Agenda',
        showOnNav: false,
        pathMatch: 'full',
        loadComponent: () => {
          return import('./pages/agenda/agenda.component').then(m => m.AgendaComponent);
        }
      },
      {
        path: 'novo-contato',
        name: 'Novo Contato',
        showOnNav: false,
        loadComponent: () => {
          return import('./pages/novo-contato/novo-contato.component').then(m => m.NovoContatoComponent);
        }
      },
    ]),
  },
];
