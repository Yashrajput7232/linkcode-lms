import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  public users(){
    return this.http.get(`${environment.api}/user/`)
  }

  addUser(firstName:string,lastName:string,email:string,type:string){
    return this.http.post(`${environment.api}/user/addUser`,{firstName,lastName,email,type});
  }

  getUsers(){
    return this.http.get(`${environment.api}/user/`);
  }

  getUser(userId: any){
    return this.http.get(`${environment.api}/user/getUser/${userId}`)
  }
}
