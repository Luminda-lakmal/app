import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.backendUrl}/api`;

  constructor(private http: HttpClient) { }

  login(object: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, object);
  }
  register(object: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, object);
  }
}
