import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient
  ) { }

  register(firstName:string , lastName:string ,email: string, password: string) : Observable<any>{

    return this.http.post(`${environment.api}/user/register`, {firstName,lastName, email, password});
  }
  signIn(email:string,password:string):Observable<any>{
     return this.http.post(`${environment.api}/user/login`,{email,password});
  }
}
