import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { Kullanicilar } from 'src/app/models/kullanicilar.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  kullanicilar: Kullanicilar = new Kullanicilar();
  faUser = faUserCircle;
  errorMessage: string = "";

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    if(this.authenticationService.currentUserValue?.id){
      this.router.navigate(['/profile']);
      return;
    }
  }

  login(){
    this.authenticationService.login(this.kullanicilar).subscribe(data=>{
      this.router.navigate(['/profile']);
    },err=>{
      this.errorMessage = "Kullanıcı Adı veya Şifre Yanlış";
      console.log(err);
      
    })
  }

}
