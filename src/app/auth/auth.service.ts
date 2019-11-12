import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Credential } from '../models/Credential';
import { Token } from '../models/Token';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string;
  isLogged: boolean;
  showMenuEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router) {
    this.url = environment.urn + '/authentication/login';
  }

  async login(credential: Credential): Promise<Token> {
    const authentication: Token = await this.http.post<Token>(this.url, credential).toPromise();
    localStorage.setItem('token', authentication.token);
    this.isLogged = true;
    this.showMenuEmitter.emit(this.isLogged);

    return authentication;
  }

  async logoff(): Promise<void> {
    localStorage.removeItem('token');
    this.isLogged = false;
    this.showMenuEmitter.emit(this.isLogged);
    this.router.navigate(['/login']);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}