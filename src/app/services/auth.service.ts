import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../model/user.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = signal<string>('');

  http = inject(HttpClient);
  user = signal<User | null>(null);

  constructor() {
    const DEFAULT_API_URL = 'localhost:8080/api'
    const baseApiUrl = process.env['BASE_API_URL'] || DEFAULT_API_URL;

    this.baseUrl.set(baseApiUrl);
  }

  register(user: User) {
    const url = this.baseUrl() + "/users";
    return this.http.post(url, user)
  }
  
}
