import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Urunler } from '../models/urunler.model';
import { AuthenticationService } from './authentication.service';
import { RequestBaseService } from './request-base.service';


const API_URL=`${environment.BASE_URL}/api/urunler`
@Injectable({
  providedIn: 'root'
})
export class UrunlerService extends RequestBaseService{

  constructor(autheticationService: AuthenticationService,http:HttpClient) {
    super(autheticationService,http);
   }

   saveUrun(urunler:Urunler): Observable<any>{
     return this.http.post(API_URL, urunler,{headers: this.getHeaders});
   }
   
   deleteUrun(urunler:Urunler):Observable<any>{
     return this.http.delete(`${API_URL}/${urunler.id}`,{headers: this.getHeaders});
   }

   getAllUrunler(): Observable<any>{
     return this.http.get(API_URL);
   }
}
