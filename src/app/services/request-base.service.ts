import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kullanicilar } from '../models/kullanicilar.model';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export abstract class RequestBaseService {
  protected currentUser: Kullanicilar = new Kullanicilar;
  protected constructor(protected authenticationService: AuthenticationService, protected http: HttpClient) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  get getHeaders(): HttpHeaders {
    return new HttpHeaders({
      authorization: 'Bearer ' + this.currentUser?.token,
      "Content-Type": "application/json; charset=UTF-8"
    }
    );
  }
}
