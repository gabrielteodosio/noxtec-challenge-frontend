import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

import { User } from '../model/user.type';
import { Contato } from '../model/contato.type';

import { env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  http = inject(HttpClient);
  agenda = signal<Array<Contato>>([]);

  constructor() { }

  fetchAgenda(user: User | null) {
    const userId = user?.id as string;

    const url = `${env.baseApiUrl}/${userId}/contacts`;
    return this.http.get<Array<Contato>>(url);
  }
}
