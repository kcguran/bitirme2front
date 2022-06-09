import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Kullanicilar } from './models/kullanicilar.model';
import { Role } from './models/role.enum';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bitirme';

  currentUser: Kullanicilar = new Kullanicilar;
  constructor(private authenticationService: AuthenticationService, private router: Router){
    this.authenticationService.currentUser.subscribe (data =>{
      this.currentUser = data;
    });
  }

  isAdmin(){
    return this.currentUser?.role === Role.ADMIN;
  }

  logOut(){
    this.authenticationService.logOut();
    this.router.navigate(['/login']);
  }
}
