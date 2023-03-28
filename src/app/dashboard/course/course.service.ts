import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  public courses(){
    return this.http.get(`${environment.api}/course/`)
  }
  //add course
  public addCourse(name:string,category:string,price:number,description:string){
    return this.http.post(`${environment.api}/course/addCourse`,{name,category,price,description});
  }

  //get single course
  public getCourse(courseId: any){
    return this.http.get(`${environment.api}/course/getCourse/${courseId}`)
  }

  //update course details
  public updateCourse(courseId: any,course: any){
    return this.http.put(`${environment.api}/course/updateCourse/${courseId}`,course);
  }

  //delete course
  public deleteCourse(courseId:any){
    return this.http.delete(`${environment.api}/course/deleteCourse/${courseId}`);

  }

  //add lecture
  public addLecture(name:any,video:FormData,courseId:any){
    return this.http.post(`${environment.api}/lecture/addLecture`,{name,video});
  }

  public getCart(userId:any){
    return this.http.get(`${environment.api}/cart/${userId}`);
  }

  public addToCart(courseId:any,userId:any){
    return this.http.post(`${environment.api}/cart/${userId}`,{courseId});
  }

  public removeItem(courseId:any,userId:any){
    return this.http.delete(`${environment.api}/cart/${userId}/${courseId}`);
  }
}
