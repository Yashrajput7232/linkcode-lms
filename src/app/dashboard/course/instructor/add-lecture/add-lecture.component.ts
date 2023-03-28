import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-lecture',
  templateUrl: './add-lecture.component.html',
  styleUrls: ['./add-lecture.component.css']
})
export class AddLectureComponent implements OnInit {

  lectureForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    video:new FormControl()
  })
  submitted=false;
  courseId=0;

  constructor(private route:ActivatedRoute,private courseService:CourseService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.courseId=this.route.snapshot.params['courseId'];
    this.lectureForm = this.formBuilder.group(
      {
        title: ['',[Validators.required]],
        video:['',[Validators.required]]
      }
    )
  }

  get formControls(): { [key: string]: AbstractControl } {
    return this.lectureForm.controls;
  }

  addLecture(){
    this.submitted = true;
    if (this.lectureForm.invalid) {
      return;
    }
    const {title,thumbnail,video} = this.lectureForm.value;
    this.courseService.addLecture(title,video,this.courseId).subscribe(
      {
        next: (data) => {
          this.router.navigate(['dashboard/course/courseId']);
        },
        error: (err) => {
        }
      }
    );

  }

}
