import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Kullanicilar } from '../models/kullanicilar.model';
import { HttpClient } from '@angular/common/http';

const API_URL = `${environment.BASE_URL}/api/authentication/`

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public currentUser: Observable<Kullanicilar>;
  private currentUserSubject: BehaviorSubject<Kullanicilar>;

  constructor(private http: HttpClient) {
    let storageUser;
    const storageUserAsStr=localStorage.getItem('currentUser');
    if(storageUserAsStr){
      storageUser=JSON.parse(storageUserAsStr);
    }
    this.currentUserSubject = new BehaviorSubject<Kullanicilar>(storageUser);
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): Kullanicilar{
     return this.currentUserSubject.value;
   }

   login(kullanicilar: Kullanicilar): Observable<any>{
     return this.http.post<any>(API_URL+'giris-yap',kullanicilar).pipe(
       map(response =>{
         if(response){
           localStorage.setItem('currentUser',JSON.stringify(response));
           this.currentUserSubject.next(response);
         }
         return response;
       })
     );
   }

   register(kullanicilar: Kullanicilar): Observable<any>{
     return this.http.post(API_URL+'kayit-ol',kullanicilar);
   }

   logOut(){
     localStorage.removeItem('currentUser');
     this.currentUserSubject.next(new Kullanicilar);
   }
}
