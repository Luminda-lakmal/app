import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.backendUrl}/api`;
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  constructor(private http: HttpClient) { }

  login(object: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, object);
  }
  register(object: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, object);
  }
  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  isAdmin(): boolean {
    const token = this.getToken();
    if (!token) return false;

    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload && payload.role === 'admin';
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
  }
  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
