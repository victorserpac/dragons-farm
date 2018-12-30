import { Injectable } from '@angular/core';
import { User } from '../models';

const LOCALSTORAGE_TOKEN_KEY = 'Authorization';
const TOKEN = 'EXAMPLETOKEN';
const LOGIN = {
  email: 'admin@dragons.com',
  password: '123456',
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated(): boolean {
    return !!localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  }  

  setToken(token: string): void {
    localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, token);
  }

  login(user: User): Promise<object> {
    if (user.email === LOGIN.email && user.password === LOGIN.password) {
      this.setToken(TOKEN);
      
      return Promise.resolve({
        success: true,
      });
    }

    return Promise.reject({
      success: false,
      message: 'Ops =( parece que sua senha ou seu email estão incorretos',
    });
  }

  logout(): void {
    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
  }
}
