import { Injectable } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { Observable } from 'rxjs';
import { ResponseLogin } from '../dto/response-login.dto';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(credenials: Credentials): Observable<ResponseLogin> {
    return this.http.post<ResponseLogin>(API.login, credenials);
  }
  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
