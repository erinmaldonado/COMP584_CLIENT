import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { LoginResponse } from './login-response';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private token = "token_key";
  private _authStatus = new BehaviorSubject<boolean>(false);
  public authStatus = this._authStatus.asObservable();
  constructor(private http: HttpClient) { }

  init(){
    if(this.isAuthenticated()){
      this.setAuthStatus(true);
    }
  }

  setAuthStatus(status: boolean) {
    this._authStatus.next(status);
  }

  getToken(): string | null {
    return localStorage.getItem(this.token);
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(environment.apiUrl + 'api/Admin', loginRequest)
    .pipe(tap(response => {
    if(response.success){
      localStorage.setItem(this.token, response.token);
      this.setAuthStatus(true);
    }  
    }));
  }

  logout(): void {
    localStorage.removeItem(this.token);
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

}