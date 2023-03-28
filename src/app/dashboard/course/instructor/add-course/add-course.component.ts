import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  courseForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(''),
    price:new FormControl(''),
    description:new FormControl('')
  })
  submitted=false;

  constructor(private courseService:CourseService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group(
      {
        name: ['',[Validators.required]],
        category: ['',[Validators.required]],
        price: ['',[Validators.required]],
        description: ['',[Validators.required]],
      }
    )
  }

  get formControls(): { [key: string]: AbstractControl } {
    return this.courseForm.controls;
  }

  addCourse(){
    this.submitted = true;
    if (this.courseForm.invalid) {
      return;
    }
    
    const { name , category ,price , description } = this.courseForm.value;
    this.courseService.addCourse(name , category ,price , description).subscribe(
      {
        next: (data) => {
          this.router.navigate(['dashboard/course']);
        },
        error: (err) => {
        }
      }
    );

  }

}
