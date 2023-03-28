import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../course.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses=[];
  modalRef!: BsModalRef;
  token:any;
  userId:any;
  CurrentUser:any;
  constructor(private courseService:CourseService,private router:Router,private modalService: BsModalService,private storageService:StorageService,private _user:UserService) { }
  course:any=[]
  ngOnInit(): void {

    this.token=this.storageService.getToken();
    this.userId=JSON.parse(atob(this.token.split('.')[1]))._id

    this.courseService.courses().subscribe(
      {
        next: (data:any) => {
          this.courses=data.courses;

        },
        error: (err) => {
        }
      }
    )

    this._user.getUser(this.userId).subscribe({
      next:(data:any)=>{
        this.CurrentUser=data
        this.course=this.CurrentUser.user.courses;
        console.log(this.CurrentUser)
      },
      error:(err)=>{
        console.log("Unable to load your data")
      }
    })

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  deleteCourse(courseId:any): void {
    this.modalRef.hide();
    this.courseService.deleteCourse(courseId).subscribe(
      {
        next: (data:any) => {
          this.courses=this.courses.filter((course)=>course['_id']!=courseId);
        },
        error: (err) => {
        }
      }
     );
  }

  cancel(): void {
    this.modalRef.hide();
  }

  public getRole(){
    return this.storageService.getRole();
  }

  public addToCart(courseId:any){
    this.courseService.addToCart(courseId,this.userId).subscribe(
      {
        next: (data:any) => {
          this.router.navigate(["dashboard/course/cart"])
        },
        error: (err: any) => {
        }
      }
    )
  }



  public checkAccessibility(courseId:any){
    if(this.course.indexOf(courseId)!=-1){
      return true;
    }
    return false;
  }

}
