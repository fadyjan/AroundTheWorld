import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  basicURL = 'https://taskfrontendapi.azurewebsites.net/api/user/login';

  constructor(private http: HttpClient) {}

  userLogin(UserObject : object): any {
    return this.http.post(`${this.basicURL}`,UserObject)
  }
}
