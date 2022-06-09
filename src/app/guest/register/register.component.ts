import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { Kullanicilar } from 'src/app/models/kullanicilar.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
  
  register(){
    this.authenticationService.register(this.kullanicilar).subscribe(data =>{
      this.router.navigate(['/giris-yap']);
    },err=>{
      if (err?.status===409) {
        this.errorMessage = "Kullanıcı adı kullanılıyor";
      }else{
        this.errorMessage = "Tanımlanmayan bir hata oluştur. Hata : " + err?.errorMessage;
        console.log(err);
      }
    })
  }

}
