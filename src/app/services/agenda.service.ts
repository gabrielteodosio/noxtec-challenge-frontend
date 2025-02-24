import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

import { Contato } from '../model/contato.type';

import { AuthService } from './auth.service';

import { env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  http = inject(HttpClient);
  authService = inject(AuthService)

  agenda = signal<Array<Contato>>([]);

  constructor() { }

  fetchAgenda() {
    const url = `${env.baseApiUrl}/contacts`;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.token()}`,
    });

    return this.http.get<Array<Contato>>(url, {
      headers,
      withCredentials: true,
    });
  }
}
