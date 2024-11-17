import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment';

@Injectable()
export class LoginService {
  baseUrl = environment.baseUrl;
  extUrl = 'https://www.app.cova.ng/';
  // generalApiUrl = environment.generalAPI;

  constructor(private http: HttpClient) {}

  login(details: any) {
    return this.http.post(`${this.baseUrl}auth/login`, details, {
      observe: 'response',
    });
  }

  loginToCova(email: string, password: string) {
    return this.http.post(`${this.extUrl}api/users/getBy/email`, {
      email,
      password,
    });
  }

  getUserInfo(email: string, password: string) {
    return this.http.post(`${this.extUrl}api/users/getBy/email`, {
      email,
      password,
    });
  }

  logout() {
    const access = sessionStorage.getItem('access');
    const refresh = sessionStorage.getItem('refresh');
    return this.http.post(`${this.baseUrl}auth/logout`, null, {
      headers: new HttpHeaders({
        'X-Access-Token': access ? access : '',
        'X-Refresh-Token': refresh ? refresh : '',
      }),
    });
  }

  forgetPassword(emailObj: any) {
    return this.http.post(`${this.baseUrl}auth/password/forget`, emailObj, {
      headers: new HttpHeaders({
        Authorization:
          'Bearer sk-live-byrx1MjxHFl6yHcJxqi58aG4WRhbk1FFUPZyR4yEQsKgomZd',
      }),
      observe: 'response',
    });
  }

  resetPassword(resetObj: any) {
    return this.http.post(`${this.baseUrl}auth/password/reset`, resetObj, {
      // headers: new HttpHeaders({
      //   "Authorization": "Bearer sk-live-byrx1MjxHFl6yHcJxqi58aG4WRhbk1FFUPZyR4yEQsKgomZd",
      // })

      observe: 'response',
    });
  }

  refreshToken() {
    const refresh = sessionStorage.getItem('refresh');
    return this.http.post(`${this.baseUrl}auth/refresh/token`, null, {
      headers: new HttpHeaders({
        'X-Refresh-Token': refresh ? refresh : '',
      }),
      observe: 'response',
    });
  }
}
