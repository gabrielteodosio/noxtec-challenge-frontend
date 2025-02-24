import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

import { User } from '../model/user.type';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);
  token = signal<string | null>(null);

  constructor() {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      this.token.set(savedToken);
    }
  }

  login(email: String, senha: String) {
    const url = env.baseApiUrl + "/auth/login";
    return this.http.post<{ token: string }>(url, { email, senha })
  }

  register(user: User) {
    const url = env.baseApiUrl + "/users";
    return this.http.post(url, user)
  }

  logOutUser() {
    localStorage.removeItem('token')
    this.token.set(null)
  }
}
