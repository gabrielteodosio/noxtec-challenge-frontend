import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

import { User } from '../model/user.type';
import { env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = signal<string>('');

  http = inject(HttpClient);
  user = signal<User | null>(null);

  constructor() {
    const baseApiUrl = env.baseApiUrl;
    this.baseUrl.set(baseApiUrl);

    const savedUserString = localStorage.getItem("savedUser");
    const savedUser: User | null = savedUserString ? JSON.parse(savedUserString) as User : null;
    if (savedUser) {
      this.user.set(savedUser);
    }
  }

  register(user: User) {
    const url = this.baseUrl() + "/users";
    return this.http.post(url, user)
  }

  logOutUser() {
    localStorage.setItem('savedUser', 'null')
    this.user.set(null)
  }
}
