import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLoggedIn;
  public usserLogged:User;

  constructor(private http: HttpClient) {this.isUserLoggedIn = false; }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
});

registerUser(user: any) {
  const url_api = "http://localhost:3000/auth/register";

  return this.http.post(url_api, user);
}

loginuser(email: string, password: string): Observable<any> {
  const url_api = "http://localhost:3000/auth/login";
  return this.http.post(url_api, {email, password});
}

setUserLoggedIn(user:User) { //guarda usuario por caché
  this.isUserLoggedIn = true;
  this.usserLogged = user;
  localStorage.setItem('currentUser', JSON.stringify(user));
}
getUserLoggedIn() {
  return localStorage.getItem('currentUser');
}

logoutUser() {
  localStorage.removeItem("currentUser");
}
}
