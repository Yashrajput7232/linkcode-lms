import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  courses=[];
  token:any;
  userId:any;
  total=0;

  constructor(private courseService:CourseService,private storageService:StorageService,private router:Router) { }

  ngOnInit(): void {
    this.token=this.storageService.getToken();
    this.userId=JSON.parse(atob(this.token.split('.')[1]))._id;
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCart(this.userId).subscribe(
      {
        next: (data:any) => {
          this.courses=data.cart.courses;
          this.total=data.cart.subTotal;
        },
        error: (err) => {
        }
      }
    )
  }

  removeItem(courseId:any){
    this.courseService.removeItem(courseId,this.userId).subscribe(
      {
        next: (data:any) => {
          this.courses=this.courses.filter((course)=>course['courseId']!=courseId);
          this.getCourses();
        },
        error: (err) => {
        }
      }
     );
  }

}
