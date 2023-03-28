import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  courseId=0;
  successMessage='';
  errorMessage='';
  course: any;

  constructor(private route:ActivatedRoute,private courseService:CourseService,private router:Router) { }

  ngOnInit(): void {

    this.courseId=this.route.snapshot.params['courseId'];
    this.courseService.getCourse(this.courseId).subscribe(
      {
        next: (data:any) => {
          this.course=data.course;
        },
        error: (err) => {
        }
      }
    );
  }

  //update course details
  public updateData(){

    this.courseService.updateCourse(this.courseId,this.course).subscribe(
      {
        next: (data:any) => {
          this.successMessage=data.message;
        },
        error: (err) => {
          this.errorMessage=err.error.message;
        }
      }
    )
  }


}
