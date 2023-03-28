import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-my-learnings',
  templateUrl: './my-learnings.component.html',
  styleUrls: ['./my-learnings.component.css']
})
export class MyLearningsComponent implements OnInit {

  constructor(private courseService:CourseService,private storageService:StorageService,private _user:UserService) { }
  courses:any=[]
  Courses:any=[]
  token:any;
  userId:any;
  CurrentUser:any;
  course:any

  ngOnInit(): void {

    this.token=this.storageService.getToken();
    this.userId=JSON.parse(atob(this.token.split('.')[1]))._id

    this._user.getUser(this.userId).subscribe({
      next:(data:any)=>{
        this.CurrentUser=data
        this.courses=this.CurrentUser.user.courses;
        console.log(this.CurrentUser)
        console.log(this.courses)

        for(var i=0 ; i<this.courses.length;i++){
          this.courseService.getCourse(this.courses[i]).subscribe({
            next:(data)=>{
              this.course=data
              this.Courses.push(this.course.course);
            }
            ,
            error:(err)=>{
              console.log(err)
            }
          })

        }

        console.log(this.Courses)
      },
      error:(err)=>{
        console.log("Unable to load your data")
      }
    })


  }






}
