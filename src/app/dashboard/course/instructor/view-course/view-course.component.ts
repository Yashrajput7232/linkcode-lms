import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../course.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})

export class ViewCourseComponent implements OnInit {

  // lectures=[];
  user:any
  instructorId:any;
  courseId=0;
  lectureId='lect123';
  token:any;
  userId:any;
  videoSource="https://vjs.zencdn.net/v/oceans.mp4";


  constructor(private route:ActivatedRoute,private courseService:CourseService,private router:Router,private storageService:StorageService,private _user:UserService) {
    this.currentLectureVideoUrl = this.lectures[0].videoUrl;
   }

  ngOnInit(): void {

    this.token=this.storageService.getToken();
    this.userId=JSON.parse(atob(this.token.split('.')[1]))._id

    this.courseId=this.route.snapshot.params['courseId'];

    this.getInstructorId();
    if(this.getRole()=="STUDENT"){
      this.getUserCourseInfo();
      this.checkAccessibility();
      console.log("Hello1")
    }
  }

  public getRole(){
    return this.storageService.getRole();
  }


  public getInstructorId()
  {
    this.courseService.getCourse(this.courseId).subscribe( //lectures()
      {
        next: (data:any) => {
          this.instructorId=data.course.instructor;

        },
        error: (err) => {
        }
      }
    )

  }
  currentTitle="Introduction";
  currentLectureVideoUrl!: String;
  lectures: any[] = [
    {
      title: 'Introduction to Angular',
      videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4'
    },
    {
      title: 'Components and Templates',
      videoUrl: 'https://vjs.zencdn.ne/v/oceans.mp4'
    },
    {
      title: 'Services and Dependency Injection',
      videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4'
    },
    {
      title: 'Introduction to Angular',
      videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4'
    },
    {
      title: 'Components and Templates',
      videoUrl: 'https://vjs.zencdn.ne/v/oceans.mp4'
    },
    {
      title: 'Services and Dependency Injection',
      videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4'
    },
    {
      title: 'Introduction to Angular',
      videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4'
    },
    {
      title: 'Components and Templates',
      videoUrl: 'https://vjs.zencdn.ne/v/oceans.mp4'
    },
    {
      title: 'Services and Dependency Injection',
      videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4'
    },
    {
      title: 'Introduction to Angular',
      videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4'
    },
    {
      title: 'Youtube',
      videoUrl: 'https://youtu.be/gbRhNoFRKoA'
    },
    {
      title: 'Services and Dependency Injection',
      videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4'
    }
  ];
  setCurrentLectureVideoUrl(url: string,title:string) {
    // update the current lecture video URL
    this.currentLectureVideoUrl = url;
    this.currentTitle=title
  }


  // get user information
  public getUserCourseInfo(){
    this._user.getUser(this.userId).subscribe({
      next:(data)=>{
        this.user=data
        this.course=this.user.user.courses
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  course:any=[]

  public checkAccessibility(){
    if(this.course.indexOf(this.courseId)!=-1){
      return true;
    }
    return false;
  }
}


